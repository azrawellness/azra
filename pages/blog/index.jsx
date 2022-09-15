import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Header, PostCard, Splash } from '../../components'
import { db } from '../../firebase-config.js'
import { POSTS } from '../../utils/constants'
import InfiniteScroll from 'react-infinite-scroll-component'

const Blogs = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [lastVisible, setLastVisible] = useState(0)
  const [totalPostCount, setTotalPostCount] = useState(0)

  const getTotalPostCount = async () => {
    const totalPostsQuery = query(collection(db, POSTS))
    const totalQuerySnapshot = await getDocs(totalPostsQuery)
    setTotalPostCount(totalQuerySnapshot.docs.length)
  }

  const getInitialPosts = async () => {
    setLoading(true)
    const initialPostQuery = query(
      collection(db, POSTS),
      orderBy('publishedDate', 'desc'),
      limit(10)
    )
    const initialQuerySnapshot = await getDocs(initialPostQuery)
    const data = []
    setLastVisible(
      initialQuerySnapshot.docs[initialQuerySnapshot.docs.length - 1]
    )
    initialQuerySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
        publishedDate: JSON.parse(
          JSON.stringify(doc.data().publishedDate.toDate())
        ),
        modifiedDate: JSON.parse(
          JSON.stringify(doc.data().modifiedDate.toDate())
        ),
      })
    })
    setPosts(data)
    setLoading(false)
  }

  const getPosts = async () => {
    const q = query(
      collection(db, POSTS),
      orderBy('publishedDate', 'desc'),
      startAfter(lastVisible),
      limit(10)
    )
    const querySnapshot = await getDocs(q)
    const data = []
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1])
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
        publishedDate: JSON.parse(
          JSON.stringify(doc.data().publishedDate.toDate())
        ),
        modifiedDate: JSON.parse(
          JSON.stringify(doc.data().modifiedDate.toDate())
        ),
      })
    })
    setPosts((prevPosts) => [...prevPosts, ...data])
  }

  useEffect(() => {
    getInitialPosts()
    getTotalPostCount()
  }, [])

  return loading ? (
    <Splash />
  ) : (
    <>
      <Head>
        <title>Blog - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="bg-gray text-black">
        <Header title="Blog" />
        <InfiniteScroll
          dataLength={posts.length} //This is important field to render the next data
          next={getPosts}
          hasMore={totalPostCount > posts.length}
          loader={
            <h4 className=" w-full max-w-xs mx-auto lg:px-0 text-center bg-primary text-white px-2 py-2 rounded shadow">
              Loading...
            </h4>
          }
          endMessage={
            <p className="text-center text-white bg-primary px-2 py-2 rounded shadow">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 w-full max-w-6xl mx-auto gap-4 py-10 px-4 lg:px-0">
            {posts &&
              posts.map((post, index) => <PostCard key={index} post={post} />)}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Blogs
