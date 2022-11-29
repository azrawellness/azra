import { collection, getDocs, query } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Splash } from '../../../components'
import { db } from '../../../firebase-config'
import { USERS } from '../../../utils/constants'

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const columns = [
    {
      name: 'Name',
      selector: (row) => (
        <Link href={`/dashboard/users/${row.id}`}>{row.displayName}</Link>
      ),
      grow: 1,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      grow: 1,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
      grow: 1,
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <div className="space-x-2">
          <Link href={`/dashboard/users/${row.id}`}>
            <a className="bg-green text-white px-4 py-2 rounded">Edit</a>
          </Link>
          <button className="bg-red text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      ),
    },
  ]

  const getUsers = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, USERS))
      const querySnapshot = await getDocs(q)

      const users = []
      querySnapshot.forEach((doc) => {
        console.log(doc)
        users.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setLoading(false)
      setUsers(users)
    } catch (error) {
      setLoading(false)
    }
  }

  const deleteUsers = (id) => {
    // TODO: Add Logic
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (loading) return <Splash />

  if (users)
    return (
      <div className="my-10">
        <div className="items-center flex justify-between mb-4">
          <div className="text-2xl">Users</div>
          <Link href="/dashboard/users/new">
            <a className="bg-primary text-white px-8 py-2 rounded hover:shadow transition">
              New
            </a>
          </Link>
        </div>
        <div className="bg-white rounded shadow w-full">
          <DataTable
            columns={columns}
            pagination
            data={users}
            progressPending={loading}
          />
        </div>
      </div>
    )
}

export default Users
