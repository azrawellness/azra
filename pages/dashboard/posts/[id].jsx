import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { MyEditor, DashboardSidebar, Splash } from '../../../components'
import { db, storage } from '../../../firebase-config'
import slugify from 'slugify'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditPost = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])

  const getPost = async () => {
    try {
      setLoading(true)
      const { id } = router.query
      const docRef = doc(db, 'posts', id)

      const docSnap = await getDoc(docRef)
      setLoading(false)

      if (docSnap.exists()) {
        setPost({ ...docSnap.data(), id: docSnap.id })
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    } catch (error) {
      setLoading(false)
    }
  }

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

  const postUpdated = (e) => {
    setPost((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const updateFeaturedImage = async (fileName, url) => {
    const postRef = doc(db, 'posts', post.id)
    await updateDoc(po, setDocstRef, {
      featuredImage: {
        fileName,
        url,
      },
    })
    await getPost()
  }

  const removeFeaturedImage = async () => {
    const storageRef = await ref(
      storage,
      `posts/${post.featuredImage.fileName}`
    )

    await deleteObject(storageRef)
      .then(async () => {
        const postRef = doc(db, 'posts', post.id)
        await updateDoc(po, setDocstRef, {
          featuredImage: {
            fileName: null,
            url: null,
          },
        })
        await getPost()
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      })
  }

  const updatePost = async () => {
    if (post.title.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    if (post.author === null) {
      toast.error('Please select an Author')
      return
    }

    const docRef = doc(db, 'posts', post.id)

    post.slug = slugify(post.title, { lower: true })
    post.modifiedDate = serverTimestamp()

    setLoading(true)
    await setDoc(docRef, post)
      .then(() => {
        toast.success('Post Updated Successfully')
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err)
      })
  }

  useEffect(() => {
    if (router.query.id) {
      getPost()
      getTags()
      getCategories()
      getUsers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  useEffect(() => {
    console.log('Post is updated')
  }, [post])

  return (
    <div className="min-h-screen h-full my-10">
      {post === null ? (
        <Splash />
      ) : (
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
                onClick={updatePost}
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
                content={post?.content}
                setPost={setPost}
              />
            </div>
            <div className="col-span-3 h-fit bg-white p-2 rounded shadow">
              <DashboardSidebar
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
      )}
    </div>
  )
}

export default EditPost
