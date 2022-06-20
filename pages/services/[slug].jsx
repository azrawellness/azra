import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore'
import moment from 'moment'
import { Image } from '../../components'
import { db } from '../../firebase-config'
import { SERVICES } from '../../utils/constants'

const Service = ({ service }) => {
  return (
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

export const getServerSideProps = async (context) => {
  const { params } = context
  let service = null
  const q = query(collection(db, SERVICES), where('slug', '==', params.slug))
  const querySnapshot = await getDocs(q)
  service = querySnapshot.docs[0].data()

  return { props: { service: JSON.parse(JSON.stringify(service)) } }
}

export default Service
