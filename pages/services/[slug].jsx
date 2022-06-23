import { collection, getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Image, Splash } from '../../components'
import { db } from '../../firebase-config'
import { SERVICES } from '../../utils/constants'
import Head from 'next/head'

const Service = () => {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { slug } = router.query

  const getService = async () => {
    setLoading(true)

    const q = query(collection(db, SERVICES), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    setService(querySnapshot.docs[0].data())
    setLoading(false)
  }

  useEffect(() => {
    if (slug) {
      getService()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return loading ? (
    <Splash />
  ) : (
    <>
      <Head>
        <title>{service.title} - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="bg-gray text-black py-16 px-4 lg:px-0">
        <div className="container mx-auto">
          {service && (
            <div className="bg-white rounded shadow w-full max-w-5xl mx-auto mb-4">
              {service.featuredImage?.url && (
                <div className="relative rounded-t w-full h-48 lg:h-96">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    imageClass="rounded-t"
                    src={service?.featuredImage?.url}
                    alt={service.title}
                  />
                </div>
              )}
              <div className="p-8">
                {/* Service Details */}
                <div className="text-2xl lg:text-4xl font-title mb-4">
                  {service.title}
                </div>

                {/* Service Content */}
                <div
                  className="lg:text-lg my-10"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Service
