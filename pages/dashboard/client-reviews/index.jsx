import { collection, getDocs, query } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { db } from '../../../firebase-config'
import { CLIENT_REVIEWS } from '../../../utils/constants'
import Image from 'next/image'
import { Splash } from '../../../components'

const ClientReviews = () => {
  const [loading, setLoading] = useState(false)
  const [clientReviews, setClientReviews] = useState([])

  const columns = [
    {
      name: 'Client Name',
      selector: (row) => (
        <Link href={`/dashboard/client-reviews/${row.id}`}>{row.name}</Link>
      ),
      grow: 1,
    },
    {
      name: 'Image',
      selector: (row) =>
        row.featuredImage.url ? (
          <Image
            width={40}
            height={40}
            objectFit="cover"
            src={row.featuredImage.url}
            alt={row.title}
          />
        ) : (
          ''
        ),
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <div className="space-x-2">
          <Link href={`/dashboard/clientReviews/${row.id}`}>
            <a className="bg-green text-white px-4 py-2 rounded">Edit</a>
          </Link>
          <button
            onClick={deleteClientReview(row.id)}
            className="bg-red text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ]

  const getClientReviews = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, CLIENT_REVIEWS))
      const querySnapshot = await getDocs(q)

      const clientReviews = []
      querySnapshot.forEach((doc) => {
        console.log(doc)
        clientReviews.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setLoading(false)
      setClientReviews(clientReviews)
    } catch (error) {
      setLoading(false)
    }
  }

  const deleteClientReview = (id) => {
    // TODO: Add Logic
  }

  useEffect(() => {
    getClientReviews()
  }, [])
  if (loading) return <Splash />

  if (clientReviews)
    return (
      <div className="my-10">
        <div className="items-center flex justify-between mb-4">
          <div className="text-2xl">Client Reviews</div>
          <Link href="/dashboard/client-reviews/new">
            <a className="bg-primary text-white px-8 py-2 rounded hover:shadow transition">
              New
            </a>
          </Link>
        </div>
        <div className="bg-white rounded shadow w-full">
          <DataTable
            columns={columns}
            pagination
            data={clientReviews}
            progressPending={loading}
          />
        </div>
      </div>
    )
}

export default ClientReviews
