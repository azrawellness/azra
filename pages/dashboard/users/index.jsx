import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Splash } from '../../../components'

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const columns = [
    {
      name: 'Name',
      selector: (row) => (row.displayName ? row.displayName : ''),
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
          <Link href={`/dashboard/users/${row.uid}`}>
            <a className="bg-green text-white px-4 py-2 rounded">Edit</a>
          </Link>
          <button
            onClick={() => deleteUsers(row.uid)}
            className="bg-red text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ]

  const getUsers = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/users')
      setUsers(data.users)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const deleteUsers = async (uid) => {
    try {
      await axios.delete(`/api/users/${uid}`)
      toast.success('User Deleted Successfully')
      await getUsers()
    } catch (error) {
      toast.error(err)
    }
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
          <Link href="/dashboard/users/0">
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
