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
import { SERVICES } from '../../../utils/constants'
import DataTable from 'react-data-table-component'
import { useState } from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = ({ services }) => {
  const [loading, setLoading] = useState(false)
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
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
            onClick={deleteService(row.id)}
            className="text-red hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ),
    },
  ]

  const deleteService = (id) => {
    // TODO: Add Logic
  }

  return (
    <div className="bg-white rounded shadow container mx-auto">
      <div className="text-2xl p-4 border-b-2 text-primary border-primary">
        Services
      </div>
      <DataTable
        columns={columns}
        pagination
        data={services}
        progressPending={loading}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const q = query(collection(db, SERVICES), limit(10))
  const querySnapshot = await getDocs(q)

  const services = []
  querySnapshot.forEach((doc) => {
    console.log(doc)
    services.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return {
    props: { services },
  }
}

export default Services
