import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'
import { POSTS } from '../../../utils/constants'
import { db } from '../../../firebase-config'
import Link from 'next/link'

const Posts = ({ posts }) => {
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
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Apple MacBook Pro 17
                    </th>
                    <td className="px-6 py-4">Sliver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
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
              <td className="px-6 py-4" colSpan="6">
                No Posts added.
              </td>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const q = query(collection(db, POSTS), orderBy('order', 'desc'))

  const querySnapshot = await getDocs(q)
  const data = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
      lastUpdatedMessage: `Last updated ${new Date(
        doc.data().timestamp.seconds * 1000
      ).toLocaleDateString()}`,
    })
  })

  return { props: { posts: data } }
}

export default Posts
