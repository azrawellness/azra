import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Image, Splash } from '../../components'
import { db } from '../../firebase-config'
import { SERVICES } from '../../utils/constants'
import { useRouter } from 'next/router'

const Service = () => {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const getService = async () => {
    setLoading(true)

    const q = query(
      collection(db, SERVICES),
      where('slug', '==', router.query.slug)
    )
    const querySnapshot = await getDocs(q)
    setService(querySnapshot.docs[0].data())
    setLoading(false)
  }

  useEffect(() => {
    getService()
  }, [])

  return loading ? (
    <Splash />
  ) : (
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
  )
}

export default Service
