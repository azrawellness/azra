import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import { Header, PostCard } from '../../components'
import { db } from '../../firebase-config.js'
import { POSTS } from '../../utils/constants'

const Blogs = ({ posts }) => {
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

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const posts = []
  const q = query(
    collection(db, POSTS),
    orderBy('publishedDate', 'desc'),
    limit(10)
  )
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    posts.push({
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
  return { props: { posts } }
}

export default Blogs
