import { useState, useRef } from 'react'
import { Image } from '../components'
import Logo from '../public/logo.png'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Login = () => {
  const { user, login } = useAuth()
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const formEl = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await login(email, password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-full min-h-screen flex items-center mx-auto text-white justify-center w-full">
      <div className="bg-primary p-4 shadow rounded w-full max-w-sm">
        <div className="relative h-16 w-16 mx-auto">
          <Image
            src={Logo}
            alt="Azrah"
            className="p-10"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <form
          ref={formEl}
          onSubmit={handleSubmit}
          id="contact-form"
          method="POST"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded w-full text-primary"
              placeholder="john@doe.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 rounded w-full text-primary"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="border-t pt-4">
            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-50 bg-white shadow p-2 rounded text-primary uppercase w-full mb-4"
            >
              {loading ? 'Processing...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="flex justify-between text-sm space-x-1">
          <div className="flex space-x-1">
            <div>New User?</div>
            <Link href="/register">
              <div className="text-center transition hover:underline cursor-pointer mb-4">
                Register
              </div>
            </Link>
          </div>
          <div>
            <Link href="/forgot-password">
              <div className="text-center transition hover:underline cursor-pointer mb-4">
                Forgot Password?
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center">Azrah. {currentYear}</div>
      </div>
    </div>
  )
}

export default Login
