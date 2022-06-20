import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../../components'
import {
  collection,
  getDocs,
  limit,
  startAfter,
  orderBy,
  query,
} from 'firebase/firestore'
import { PostCard } from '../../components'
import { db } from '../../firebase-config.js'
import { POSTS } from '../../utils/constants'

const Blogs = () => {
  const [posts, setPosts] = useState([])

  const getInitialPosts = async () => {
    const data = []
    const q = query(
      collection(db, POSTS),
      orderBy('publishedDate', 'desc'),
      limit(10)
    )
    const querySnapshot = await getDocs(q)

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
      setPosts(data)
    })
  }

  useEffect(() => {
    getInitialPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Blog - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="bg-gray text-black">
        <Header title="Blog" />
        <div className="grid grid-cols-1 w-full max-w-6xl mx-auto gap-4 py-10 px-4 lg:px-0">
          {posts &&
            posts.map((post, index) => <PostCard key={index} post={post} />)}
        </div>
      </div>
    </>
  )
}

export default Blogs
