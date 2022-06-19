import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
  limit,
} from 'firebase/firestore'
import Link from 'next/link'
import { db } from '../../../firebase-config'
import { POSTS } from '../../../utils/constants'
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [beginAfter, setBeginAfter] = useState(0)
  const [totalPostsCount, setTotalPostCounts] = useState(0)

  const getPostsCount = async () => {
    const q = query(collection(db, POSTS))
    const querySnapshot = await getDocs(q)
    setTotalPostCounts(querySnapshot.docs.length)
  }

  const getInitialPosts = async () => {
    const q = query(
      collection(db, POSTS),
      orderBy('publishedDate'),
      startAfter(beginAfter),
      limit(10)
    )
    const querySnapshot = await getDocs(q)

    const data = []
    querySnapshot.forEach((doc) => {
      console.log(doc)
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
  }

  useEffect(() => {
    getPostsCount()
    getInitialPosts()
  }, [])

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="text-2xl">Posts</div>
        <Link href="/dashboard/posts/new">
          <a className="bg-white px-4 py-1 rounded hover:shadow transition">
            New
          </a>
        </Link>
      </div>
      <div className="bg-white rounded shadow container mx-auto p-2">
        <div className="relative overflow-x-auto sm:rounded-lg">
          {posts && posts.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Featured Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categories
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tags
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{post.title}</td>
                    <td className="px-6 py-4"></td>
                    {/* <td className="px-6 py-4">{post.authorId}</td> */}
                    {/* <td className="px-6 py-4">{post.categories}</td> */}
                    {/* <td className="px-6 py-4">{post.tags}</td> */}
                    <td className="px-6 py-4">
                      <div></div>
                      {post.publishedDate}
                    </td>
                    <td className="px-6 py-4">{post.status}</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-white h-32 text-3xl flex justify-center items-center dark:bg-gray-800 dark:border-gray-700">
              <div className="px-6 py-4" colSpan="6">
                No Posts added.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const q = query(collection(db, 'posts'))

//   const querySnapshot = await getDocs(q)
//   const data = []
//   querySnapshot.forEach((doc) => {
//     console.log(doc)
//     data.push({
//       ...doc.data(),
//       id: doc.id,
//       publishedDate: JSON.parse(
//         JSON.stringify(doc.data().publishedDate.toDate())
//       ),
//       modifiedDate: JSON.parse(
//         JSON.stringify(doc.data().modifiedDate.toDate())
//       ),
//     })
//   })

//   return { props: { posts: data } }
// }

export default Posts
