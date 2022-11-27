import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  setDoc,
} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MyEditor, PostSidebar, Splash } from '../../../components'
import { storage, db } from '../../../firebase-config'

const EditPost = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])

  const getPost = async () => {
    setLoading(true)
    const { slug } = router.query
    const q = query(collection(db, 'posts'), where('slug', '==', slug))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setPost({ ...doc.data(), id: doc.id })
    })
    setLoading(false)
  }

  const updatePost = async () => {
    const docRef = doc(db, 'posts', post.id)

    await setDoc(docRef, post)
      .then(() => {
        console.log('Document Updated Successfully!!')
      })
      .catch((error) => {
        console.log(error)
      })
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
    await updateDoc(postRef, {
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
        await updateDoc(postRef, {
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

  useEffect(() => {
    if (router.query.slug) {
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
      {loading && !post ? (
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
                className="w-1/12 px-2 py-1 rounded bg-primary text-white shadow"
              >
                Save
              </button>
            </div>
          </div>
          <div className="h-full  grid grid-cols-12 gap-4">
            <div className="min-h-screen h-full col-span-9 bg-white p-2 rounded shadow">
              <MyEditor content={post?.content} />
            </div>
            <div className="col-span-3 h-fit bg-white p-2 rounded shadow">
              <PostSidebar
                post={post}
                tags={tags}
                categories={categories}
                users={users}
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
