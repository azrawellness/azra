import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header, ServiceCard, Splash } from '../../components'
import { db } from '../../firebase-config'
import { SERVICES } from '../../utils/constants'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)

  const getServices = async () => {
    setLoading(true)
    const servicesRef = collection(db, SERVICES)
    const q = query(servicesRef, orderBy('publishedDate'))
    const querySnapshot = await getDocs(q)
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    setServices(data)
    setLoading(false)
  }

  useEffect(() => {
    getServices()
  }, [])

  return (
    <>
      <Head>
        <title>Services - Azrah</title>
        <meta
          name="description"
          content="Azrah Website"
        />
      </Head>
      <div className="bg-gray text-black">
        <Header title="Services" />
        <div className="container mx-auto py-16">
          {loading ? (
            <Splash />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4 lg:px-0 mb-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  imageSrc={service.thumbnail.url}
                  title={service.title}
                  description={service.description}
                  buttonLink={`/services/${service.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Services
