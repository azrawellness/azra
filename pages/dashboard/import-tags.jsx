import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import tagsData from '../../utils/tags.json'
import { db } from '../../firebase-config.js'

const ImportPost = () => {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(null)
  const [lastVisibleDocument, setLastVisibleDocument] = useState(0)
  const [totalPostCounts, setTotalPostCounts] = useState(0)
  const [loading, setLoading] = useState(false)

  const uploadPosts = async () => {
    tagsData.forEach(async (tagValue) => {
      // console.log(tagValue, 18)
      const docRef = await addDoc(collection(db, 'tags'), {
        name: tagValue.name,
        slug: tagValue.slug,
      })
    })
  }

  return (
    <div className="bg-white p-2 rounded shadow">
      <div>
        Total Posts Count:
        {totalPostCounts}
      </div>
      {posts && posts.length > 0 ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Featured Image
              </th>
              <th scope="col" className="px-6 py-3">
                Image Uploaded
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{post.slug}</td>
                <td className="px-6 py-4">{post.featuredImage}</td>
                <td className="px-6 py-4">
                  {post.featuredImage ? 'Uploaded' : 'Not Uploaded'}
                </td>
                <td className="px-6 py-4 text-right" width="15%">
                  <button
                    onClick={() => uploadImage(post.slug, post.id)}
                    disabled={post.featuredImage ? true : false}
                    className={`font-medium text-blue-600 dark:text-blue-500 hover:underline disabled:bg-opacity-20 ${
                      post.featuredImage ? 'bg-red' : 'bg-primary'
                    } px-2 py-1 rounded text-white`}
                  >
                    {loading && currentPost === post.id
                      ? 'Uploading...'
                      : 'Upload'}
                  </button>
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
      {/* <h3 className="text-center mb-4">
        {finished ? 'Finished' : uploading ? 'Uploading' : 'Not Started'}
      </h3>
      <ul className="mb-4">
        {docIds.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
        </ul> */}
      <button onClick={uploadPosts} className="bg-primary px-2 py-2 rounded">
        Start Upload
      </button>
    </div>
  )
}

export default ImportPost
