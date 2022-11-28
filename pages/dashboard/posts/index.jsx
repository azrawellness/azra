import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { db } from '../../../firebase-config'
import { POSTS } from '../../../utils/constants'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

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

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [posts, setPosts] = useState([])
  const [publishedPosts, setPublishedPosts] = useState([])
  const [draftPosts, setDraftPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPostsCount, setTotalPostCounts] = useState(0)
  const [totalPublishedPostsCount, setTotalPublishedPostCounts] = useState(0)
  const [totalDraftPostsCount, setTotalDraftPostCounts] = useState(0)

  const getPostsCount = async () => {
    const q = query(collection(db, POSTS))
    const qDraft = query(collection(db, POSTS), where('status', '==', 'draft'))
    const qPublished = query(
      collection(db, POSTS),
      where('status', '==', 'published')
    )

    const querySnapshot = await getDocs(q)
    const queryDraftSnapshot = await getDocs(qDraft)
    const queryPublishedSnapshot = await getDocs(qPublished)

    setTotalPostCounts(querySnapshot.docs.length)
    setTotalPublishedPostCounts(queryDraftSnapshot.docs.length)
    setTotalDraftPostCounts(queryPublishedSnapshot.docs.length)
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

  const getPublishedPosts = async () => {
    setLoading(true)

    const q = query(
      collection(db, POSTS),
      where('status', '==', 'published'),
      orderBy('publishedDate', 'desc')
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
    setPublishedPosts(data)
    setLoading(false)
  }

  const getDraftPosts = async () => {
    setLoading(true)

    const q = query(
      collection(db, POSTS),
      where('status', '==', 'draft'),
      orderBy('publishedDate', 'desc')
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
    setDraftPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    getPostsCount()
    getPosts()
    getPublishedPosts()
    getDraftPosts()
  }, [])

  return (
    <div className="my-10">
      <div className="items-center flex justify-between mb-4">
        <div className="text-2xl">Posts</div>
        <Link href="/dashboard/posts/new">
          <a className="bg-primary text-white px-8 py-2 rounded hover:shadow transition">
            New
          </a>
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="max-w-2xl space-x-2 px-2">
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`
                w-24 px-4  py-2 rounded text-white
                  ${selected ? 'bg-primary' : 'bg-secondary'}`}
                >
                  All
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`
                w-24 px-4 py-2 rounded text-white
                  ${selected ? 'bg-primary' : 'bg-secondary'}`}
                >
                  Published
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`
                w-24 px-4 py-2 rounded text-white
                  ${selected ? 'bg-primary' : 'bg-secondary'}`}
                >
                  Draft
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <div className="container mx-auto">
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
            </Tab.Panel>
            <Tab.Panel>
              <div className="container mx-auto">
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <DataTable
                    columns={columns}
                    pagination
                    paginationTotalRows={totalPublishedPostsCount}
                    data={publishedPosts}
                    progressPending={loading}
                  />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="container mx-auto">
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <DataTable
                    columns={columns}
                    pagination
                    paginationTotalRows={totalDraftPostsCount}
                    data={draftPosts}
                    progressPending={loading}
                  />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default Posts
