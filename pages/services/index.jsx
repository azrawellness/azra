import { collection, getDocs, query } from 'firebase/firestore'
import Head from 'next/head'
import { Calendly, Header, ServiceCard } from '../../components'
import { SERVICES } from '../../utils/constants'
import { db } from '../../firebase-config'

const Services = ({ services }) => {
  return (
    <>
      <Head>
        <title>Services - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="bg-gray text-black">
        <Header title="Services" />
        <div className="container mx-auto py-16">
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
        </div>
        <Calendly />
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const servicesRef = collection(db, SERVICES)
  const q = query(servicesRef)
  const querySnapshot = await getDocs(q)
  let services = []
  querySnapshot.forEach((doc) => {
    services.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return {
    props: {
      services: JSON.parse(JSON.stringify(services)),
    },
  }
}

export default Services
