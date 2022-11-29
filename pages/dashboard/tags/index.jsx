import { collection, getDocs, query } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Splash } from '../../../components'
import { db } from '../../../firebase-config'
import { TAGS } from '../../../utils/constants'

const Tags = () => {
  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState([])

  const columns = [
    {
      name: 'Name',
      selector: (row) => (
        <Link href={`/dashboard/tags/${row.id}`}>{row.name}</Link>
      ),
      grow: 1,
    },
    {
      name: 'Slug',
      selector: (row) => row.slug,
      grow: 1,
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <div className="space-x-2">
          <Link href={`/dashboard/tags/${row.id}`}>
            <a className="bg-green text-white px-4 py-2 rounded">Edit</a>
          </Link>
          <button className="bg-red text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      ),
    },
  ]

  const getTags = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, TAGS))
      const querySnapshot = await getDocs(q)

      const tags = []
      querySnapshot.forEach((doc) => {
        console.log(doc)
        tags.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setLoading(false)
      setTags(tags)
    } catch (error) {
      setLoading(false)
    }
  }

  const deleteTags = (id) => {
    // TODO: Add Logic
  }

  useEffect(() => {
    getTags()
  }, [])

  if (loading) return <Splash />

  if (tags)
    return (
      <div className="my-10">
        <div className="items-center flex justify-between mb-4">
          <div className="text-2xl">Tags</div>
          <Link href="/dashboard/tags/new">
            <a className="bg-primary text-white px-8 py-2 rounded hover:shadow transition">
              New
            </a>
          </Link>
        </div>
        <div className="bg-white rounded shadow w-full">
          <DataTable
            columns={columns}
            pagination
            data={tags}
            progressPending={loading}
          />
        </div>
      </div>
    )
}

export default Tags
