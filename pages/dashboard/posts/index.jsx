import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
  limit,
} from 'firebase/firestore'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { db } from '../../../firebase-config'
import { POSTS } from '../../../utils/constants'
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [beginAfter, setBeginAfter] = useState(0)
  const [totalPostsCount, setTotalPostCounts] = useState(0)

  const getPostsCount = async () => {
    const q = query(collection(db, POSTS))
    const querySnapshot = await getDocs(q)
    setTotalPostCounts(querySnapshot.docs.length)
  }

  const deletePost = async (id) => {
    // TODO: Add Logic
  }

  const getInitialPosts = async () => {
    setLoading(true)
    const q = query(
      collection(db, POSTS),
      orderBy('publishedDate'),
      startAfter(beginAfter),
      limit(10)
    )
    const querySnapshot = await getDocs(q)

    const data = []
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
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    getPostsCount()
    getInitialPosts()
  }, [])

  return (
    <div className="my-10">
      <div className="p-4 items-center flex justify-between mb-4">
        <div className="text-2xl">Posts</div>
        <Link href="/dashboard/posts/new">
          <a className="bg-primary text-white px-8 py-2 rounded hover:shadow transition">
            New
          </a>
        </Link>
      </div>
      <div className="bg-white rounded shadow container mx-auto">
        <div className="relative overflow-x-auto sm:rounded-lg">
          {posts && posts.length > 0 ? (
            <table className="w-full text-sm text-left">
              <thead className="text-sm text-white uppercase bg-gray-dark">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Featured Image
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="bg-white hover:bg-primary hover:text-white transition"
                  >
                    <td className="px-6 py-4">{post.title}</td>
                    <td className="px-6 py-4">
                      <Image
                        width={50}
                        height={50}
                        objectFit="cover"
                        src={post.featuredImage.url}
                        alt={post.title}
                      />
                    </td>
                    <td className="px-6 py-4">{post.author.displayName}</td>
                    {/* <td className="px-6 py-4">{post.categories}</td> */}
                    {/* <td className="px-6 py-4">{post.tags}</td> */}
                    <td className="px-6 py-4">
                      <div></div>
                      {moment(post.publishedDate).format('DD/MM/YYYY')}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`${
                          post.status === 'publish' ? 'bg-green' : ''
                        } px-2 py-1 text-xs rounded-md text-white uppercase`}
                      >
                        {post.status === 'publish' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/dashboard/posts/${post.slug}`}>
                        <a className="text-green hover:shadow-lg mr-2">
                          <FontAwesomeIcon size="2x" icon={faPenToSquare} />
                        </a>
                      </Link>
                      <button
                        onClick={deletePost(post.id)}
                        className="text-red hover:shadow-lg"
                      >
                        <FontAwesomeIcon size="2x" icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-white h-32 text-3xl flex justify-center items-center dark:bg-gray-800 dark:border-gray-700">
              <div className="px-6 py-4" colSpan="6">
                {loading ? 'Loading' : 'No Posts added.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Posts
