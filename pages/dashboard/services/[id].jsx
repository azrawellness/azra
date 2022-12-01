import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import slugify from 'slugify'
import { MyEditor, ServiceSidebar, Splash } from '../../../components'
import { db } from '../../../firebase-config'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditService = () => {
  const router = useRouter()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(false)

  const getService = async () => {
    try {
      setLoading(true)
      const { id } = router.query
      const docRef = doc(db, 'services', id)

      const docSnap = await getDoc(docRef)
      setLoading(false)

      if (docSnap.exists()) {
        setService({ ...docSnap.data(), id: docSnap.id })
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const serviceUpdated = () => {}

  const removeFeaturedImage = () => {}

  const updateFeaturedImage = () => {}

  const removeThumbnail = () => {}

  const updateThumbnail = () => {}

  const updateService = async () => {
    if (service.title.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    const docRef = doc(db, 'services', service.id)
    service.slug = slugify(service.title, { lower: true })
    service.modifiedDate = serverTimestamp()
    setLoading(true)
    await setDoc(docRef, service)
      .then(() => {
        if (service.featuredImage.name === null) {
          toast.warning(
            'Please add Featured image before publishing the service!!'
          )
        }

        if (service.thumbnail.name === null) {
          toast.warning('Please add Thumbnail before publishing the service!!')
        }
        toast.success('Service Updated Successfully!!')
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err)
      })
  }

  useEffect(() => {
    if (router.query.id) {
      getService()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <div className="min-h-screen h-full my-10">
      {service === null ? (
        <Splash />
      ) : (
        <>
          <div className="bg-white p-2 rounded shadow mb-4">
            <div className="w-full flex space-x-2">
              <input
                type="text"
                name="title"
                value={service?.title}
                onChange={(e) =>
                  setService({ ...service, title: e.target.value })
                }
                id="title"
                placeholder="Title"
                className="w-11/12 font-title text-xl px-4 py-1 border-gray-dark border rounded"
              />
              {/* Buttons */}
              <button
                onClick={updateService}
                disabled={loading}
                className="w-1/12 px-2 py-1 rounded bg-primary text-white shadow"
              >
                {loading ? (
                  <FontAwesomeIcon
                    icon={faGear}
                    spin
                  />
                ) : (
                  'Update'
                )}
              </button>
            </div>
          </div>
          <div className="h-full  grid grid-cols-12 gap-4">
            <div className="min-h-screen h-full col-span-9 bg-white p-2 rounded shadow">
              <MyEditor
                content={service?.content}
                setContent={(e) =>
                  setService((prevState) => ({ ...prevState, content: e }))
                }
              />
            </div>
            <div className="col-span-3 h-fit bg-white p-2 rounded shadow">
              <ServiceSidebar
                service={service}
                setService={setService}
                serviceUpdated={serviceUpdated}
                featuredImage={service?.featuredImage}
                removeFeaturedImage={removeFeaturedImage}
                updateFeaturedImage={updateFeaturedImage}
                thumbnail={service?.thumbnail}
                removeThumbnail={removeThumbnail}
                updateThumbnail={updateThumbnail}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EditService
