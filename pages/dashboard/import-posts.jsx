import React, { useEffect, useState } from 'react'
import postsData from '../../utils/blog.json'
import tagsData from '../../utils/tags.json'
import media from '../../utils/media.json'
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  updateDoc,
  limit,
  startAfter,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { db, storage } from '../../firebase-config.js'
import { POSTS } from '../../utils/constants'
import { orderBy } from 'cypress/types/lodash'

const ImportPost = () => {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(null)
  const [lastVisibleDocument, setLastVisibleDocument] = useState(null)
  const [loading, setLoading] = useState(false)

  const getInitialPosts = async () => {
    const data = []
    const q = query(collection(db, POSTS), orderBy('publishedDate'), limit(10))
    const querySnapshot = await getDocs(q)
    setLastVisibleDocument(
      documentSnapshots.docs[documentSnapshots.docs.length - 1]
    )

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

  const getPosts = async () => {
    const data = []
    const q = query(
      collection(db, POSTS),
      orderBy('publishedDate'),
      startAfter(lastVisibleDocument),
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

  const uploadImage = async (slug, postId) => {
    const post = postsData.find((p) => p.slug === slug)
    const mediaData = media.find((m) => parseInt(m.ID) === post.featured_media)
    setCurrentPost(postId)

    if (mediaData && mediaData.guid) {
      setLoading(true)
      fetch(mediaData.guid)
        .then((res) => {
          return res.blob()
        })
        .then((blob) => {
          const fileName =
            mediaData.post_mime_type === 'image/jpeg'
              ? `${mediaData.post_name}.jpg`
              : `${mediaData.post_name}.png`
          const storageRef = ref(storage, `posts/${fileName}`)
          uploadBytes(storageRef, blob).then(async (snapshot) => {
            console.log(snapshot)
            getDownloadURL(storageRef).then(async (url) => {
              console.log(url, 32)
              const postRef = doc(db, 'posts', postId)
              // Set the "capital" field of the city 'DC'
              await updateDoc(postRef, {
                featuredImage: url,
              })
            })
            setLoading(false)
            setCurrentPost(null)
            getPosts()
          })
        })
    }
  }

  // const uploadPosts = async () => {
  //   setUploading(true)
  //   const storageRef = ref(storage, 'posts')
  //   setTimeout(() => {
  //     posts.forEach(async (post) => {
  //       const tags = []
  //       let imageUrl = null

  //       const mediaUrl = media.find(
  //         (m) => parseInt(m.ID) === post.featured_media
  //       )
  //       console.log(mediaUrl, 24)
  //       if (mediaUrl) {
  //         fetch(mediaUrl)
  //           .then((res) => {
  //             return res.blob()
  //           })
  //           .then((blob) => {
  //             uploadBytes(storageRef, blob).then((snapshot) => {
  //               console.log(snapshot, 32)
  //               imageUrl = snapshot
  //             })
  //           })
  //       }

  //       post.tags.forEach((tagValue) => {
  //         // console.log(tagValue, 18)
  //         const tag = tagsData.find((t) => parseInt(t.term_id) === tagValue)
  //         // console.log(tag, 19)
  //         tags.push({
  //           name: tag.name,
  //           slug: tag.slug,
  //         })
  //       })

  //       // console.log(tags, 28)
  //       const docRef = await addDoc(collection(db, 'posts'), {
  //         title: post.title.rendered,
  //         content: post.content.rendered,
  //         excerpt: post.excerpt.rendered,
  //         publishedDate: serverTimestamp(Date.parse(post.date)),
  //         modifiedDate: serverTimestamp(Date.parse(post.modified)),
  //         slug: post.slug,
  //         status: post.status,
  //         categories: [
  //           {
  //             name: 'Health Management',
  //             slug: 'health-management',
  //           },
  //         ],
  //         author: [
  //           {
  //             uid: 'e8YbKaz3MIWA49FQ322e4OGPRsC2',
  //             name: 'Azra',
  //             displayName: 'Azra',
  //           },
  //         ],
  //         tags: tags,
  //         featuredImage: imageUrl,
  //       })
  //       docIds.push(docRef.id)
  //       setUploading(false)
  //       setFinished(true)
  //     })
  //   }, 5000)
  // }

  return (
    <div className="bg-white p-2 rounded shadow">
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
      </ul>
      <button onClick={uploadPosts} className="bg-primary px-2 py-2 rounded">
        Start Upload
      </button> */}
    </div>
  )
}

export default ImportPost
