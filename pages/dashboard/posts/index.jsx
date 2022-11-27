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
import DataTable from 'react-data-table-component'

const Posts = () => {
  const columns = [
    {
      name: 'Title',
      selector: (row) => (
        <Link href={`/dashboard/posts/${row.slug}`}>{row.title}</Link>
      ),
    },
    {
      name: 'Featured Image',
      selector: (row) => (
        <Image
          width={40}
          height={40}
          objectFit="cover"
          src={row.featuredImage.url}
          alt={row.title}
        />
      ),
    },
    {
      name: 'Author',
      selector: (row) => row.author.displayName,
    },
    {
      name: 'Date',
      selector: (row) => moment(row.publishedDate).format('DD/MM/YYYY'),
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`${
            row.status === 'publish' ? 'bg-green' : ''
          } px-2 py-1 text-xs rounded-md text-white uppercase`}
        >
          {row.status === 'publish' ? 'Published' : 'Draft'}
        </span>
      ),
    },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <Link href={`/dashboard/posts/${row.slug}`}>
            <a className="text-green hover:shadow-lg mr-2">
              <FontAwesomeIcon icon={faPenToSquare} />
            </a>
          </Link>
          <button
            onClick={deletePost(row.id)}
            className="text-red hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ),
    },
  ]

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPostsCount, setTotalPostCounts] = useState(0)

  const getPostsCount = async () => {
    const q = query(collection(db, POSTS))
    const querySnapshot = await getDocs(q)
    setTotalPostCounts(querySnapshot.docs.length)
  }

  const deletePost = async (id) => {
    // TODO: Add Logic
    console.log('called', 93)
  }

  const getPosts = async () => {
    setLoading(true)

    const q = query(collection(db, POSTS), orderBy('publishedDate', 'desc'))

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
    getPosts()
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
          <DataTable
            columns={columns}
            pagination
            paginationTotalRows={totalPostsCount}
            data={posts}
            progressPending={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default Posts
