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
import { MyEditor, PostSidebar } from '../../../components'
import { db } from '../../../firebase-config'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewPost = () => {
  const router = useRouter()
  const [post, setPost] = useState({
    author: null,
    categories: [],
    content: '',
    excerpt: '',
    featuredImage: {
      fileName: null,
      url: null,
    },
    modifiedDate: null,
    publishedDate: null,
    slug: null,
    status: 'draft',
    tags: [],
    title: '',
  })
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(null)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])

  const postUpdated = () => {}

  const updatePost = () => {}

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

  const saveNewPost = async () => {
    if (post.title.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    if (post.author === null) {
      toast.error('Please select an Author')
      return
    }

    try {
      setLoading(true)
      post.slug = slugify(post.title, { lower: true })
      post.publishedDate = serverTimestamp()
      post.modifiedDate = serverTimestamp()
      const response = await addDoc(collection(db, 'posts'), post)
      setLoading(false)
      console.log(response, 96)
      router.push(`/dashboard/posts/${response.id}`)
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
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            id="title"
            placeholder="Title"
            className="w-11/12 font-title text-xl px-4 py-1 border-gray-dark border rounded"
          />
          {/* Buttons */}
          <button
            onClick={saveNewPost}
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
            content={post?.content}
            setPost={setPost}
          />
        </div>
        <div className="col-span-3 h-fit bg-white p-2 rounded shadow">
          <PostSidebar
            post={post}
            tags={tags}
            categories={categories}
            users={users}
            setPost={setPost}
            postUpdated={postUpdated}
            featuredImage={post?.featuredImage}
            removeFeaturedImage={removeFeaturedImage}
            updateFeaturedImage={updateFeaturedImage}
          />
        </div>
      </div>
    </>
  )
}

export default NewPost
