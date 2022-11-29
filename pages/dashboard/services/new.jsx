import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import slugify from 'slugify'
import { MyEditor, DashboardSidebar } from '../../../components'
import { db } from '../../../firebase-config'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewService = () => {
  const router = useRouter()
  const [service, setService] = useState({
    description: '',
    content: '',
    featuredImage: {
      name: null,
      url: null,
    },
    thumbnail: {
      name: null,
      url: null,
    },
    modifiedDate: null,
    publishedDate: null,
    slug: null,
    title: '',
  })
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(null)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])

  const serviceUpdated = () => {}

  const updateService = () => {}

  const removeFeaturedImage = () => {}

  const updateFeaturedImage = () => {}

  const getTags = async () => {
    let lTags = []
    const querySnapshot = await getDocs(collection(db, 'tags'))
    querySnapshot.forEach((doc) => {
      lTags.push({ ...doc.data(), id: doc.id })
    })
    setTags(lTags)
  }

  const getCategories = async () => {
    let lCategories = []
    const querySnapshot = await getDocs(collection(db, 'categories'))
    querySnapshot.forEach((doc) => {
      lCategories.push({ ...doc.data(), id: doc.id })
    })
    setCategories(lCategories)
  }

  const getUsers = async () => {
    let lUsers = []
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      lUsers.push({ ...doc.data(), id: doc.id })
    })
    setUsers(lUsers)
  }

  const saveNewService = async () => {
    if (service.title.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    if (service.author === null) {
      toast.error('Please select an Author')
      return
    }

    try {
      setLoading(true)
      service.slug = slugify(service.title, { lower: true })
      service.publishedDate = serverTimestamp()
      service.modifiedDate = serverTimestamp()
      const response = await addDoc(collection(db, 'services'), service)
      setLoading(false)
      console.log(response, 96)
      router.push(`/dashboard/services/${response.id}`)
    } catch (error) {
      setLoading(false)
      toast.error(error)
    }
  }

  useEffect(() => {
    getTags()
    getCategories()
    getUsers()
  }, [])

  return (
    <>
      <div className="bg-white p-2 rounded shadow mb-4">
        <div className="w-full flex space-x-2">
          <input
            type="text"
            name="title"
            value={service?.title}
            onChange={(e) => setService({ ...service, title: e.target.value })}
            id="title"
            placeholder="Title"
            className="w-11/12 font-title text-xl px-4 py-1 border-gray-dark border rounded"
          />
          {/* Buttons */}
          <button
            onClick={saveNewService}
            disabled={loading}
            className="w-1/12 px-2 py-1 rounded bg-primary text-white shadow"
          >
            {loading ? (
              <FontAwesomeIcon
                icon={faGear}
                spin
              />
            ) : (
              'Save'
            )}
          </button>
        </div>
      </div>
      <div className="h-full  grid grid-cols-12 gap-4">
        <div className="min-h-screen h-full col-span-9 bg-white p-2 rounded shadow">
          <MyEditor
            content={service?.content}
            setService={setService}
          />
        </div>
        <div className="col-span-3 h-fit bg-white p-2 rounded shadow">
          <DashboardSidebar
            service={service}
            tags={tags}
            categories={categories}
            users={users}
            setService={setService}
            serviceUpdated={serviceUpdated}
            featuredImage={service?.featuredImage}
            removeFeaturedImage={removeFeaturedImage}
            updateFeaturedImage={updateFeaturedImage}
          />
        </div>
      </div>
    </>
  )
}

export default NewService
