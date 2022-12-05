import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const UserItem = () => {
  const router = useRouter()

  const [user, setUser] = useState({
    uid: '',
    email: '',
    phoneNumber: '',
    emailVerified: false,
    password: '',
    displayName: '',
    photoURL: '',
    disabled: false,
  })
  const [isNewUser, setIsNewUser] = useState(false)

  const fetchUserData = async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`)

      setUser((prevState) => ({
        ...prevState,
        uid: data.user.uid,
        email: data.user.email,
        displayName: data.user.displayName,
        disabled: data.user.disabled,
      }))
      setUser(data.user)
    } catch (error) {
      console.log(error, 26)
    }
  }

  const processFormSubmit = async () => {
    try {
      if (isNewUser) {
        await axios.post(`/api/users`, user)
        toast.success('User saved Successfully')
      } else {
        await axios.put(`/api/users/${user.uid}`, user)
        toast.success('User updated Successfully')
      }
    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }

  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id, 25)
      if (router.query.id === '0' || router.query.id === 0) {
        setIsNewUser(true)
      } else {
        fetchUserData(router.query.id)
      }
    }
    return () => {
      setIsNewUser(false)
    }
  }, [router])

  return (
    <div className="bg-white p-4 rounded shadow mb-4 mx-auto max-w-2xl">
      <div className="text-primary text-2xl">
        {isNewUser ? 'Create user' : 'Update user'}
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            className="border-primary rounded border px-4 py-2 w-full"
            type="text"
            value={user.displayName}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                displayName: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-col space-y-2">
          <label htmlFor="name">Email</label>
          <input
            className="border-primary rounded border px-4 py-2 w-full"
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-col space-y-2">
          <label htmlFor="name">Password</label>
          <input
            className="border-primary rounded border px-4 py-2 w-full"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-col space-y-2">
          <label htmlFor="name">Disabled?</label>
          <select
            name="disabled"
            id="disabled"
            className="border-primary bg-white rounded border px-4 py-2 w-full"
            value={user.disabled ? 'true' : 'false'}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                disabled: e.target.value === 'true' ? true : false,
              }))
            }
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={processFormSubmit}
            className="bg-primary text-white px-4 py-2 rounded shadow"
          >
            {isNewUser ? 'Save' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserItem
