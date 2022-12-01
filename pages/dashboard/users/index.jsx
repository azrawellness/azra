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
          <button className="bg-red text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      ),
    },
  ]

  const getUsers = async () => {
    const res = await fetch('/api/users')
    const { users } = await res.json()

    // console.log(data, 46)

    setUsers(users)
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

// export async function getStaticProps() {
//   const users = []
//   await firebaseAdmin
//     .auth()
//     .listUsers()
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         users.push(userRecord)
//       })
//       // if (listUsersResult.pageToken) {
//       //   // List next batch of users.
//       //   listAllUsers(listUsersResult.pageToken)
//       // }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error)
//     })

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       users: JSON.stringify(users),
//     },
//   }
// }

export default Users
