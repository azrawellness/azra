import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { PostSlider, Splash } from '../../components'
import { db } from '../../firebase-config.js'
import { POSTS } from '../../utils/constants'

const PostsSection = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    setLoading(true)
    const postsRef = collection(db, POSTS)
    const q = query(postsRef, orderBy('publishedDate', 'desc'), limit(10))
    let data = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="py-16 px-4 lg:px-0">
      <div className="text-center font-title text-4xl mb-4">
        Our Latest News
      </div>
      <div className="container mx-auto">
        <div className="w-full mx-auto text-center max-w-2xl">
          Top stories featured on Health & Medicine, Mind & Brain, and Living
          Well sections. Your source for the latest research news.
        </div>
        {loading ? <Splash /> : <PostSlider posts={posts} />}
      </div>
    </div>
  )
}

export default PostsSection
