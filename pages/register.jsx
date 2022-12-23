import Link from 'next/link'
import Head from 'next/head'
import { Image } from '../components'
import Logo from '../public/logo.png'

const Register = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>Azrah - Register</title>
        <meta name="description" content="Azrah Website" />
      </Head>
      <div className="h-full min-h-screen flex items-center mx-auto text-white justify-center w-full">
        <div className="bg-primary p-4 shadow rounded w-full max-w-sm">
          <div className="relative h-16 w-16 mx-auto">
            <Image
              src={Logo}
              alt="Azrah"
              className="p-10 cursor-pointer"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="p-2 rounded w-full"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded w-full"
              placeholder="john@doe.com"
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
              className="p-2 rounded w-full"
              placeholder="******"
            />
          </div>
          <div className="border-t pt-4">
            <button className="bg-white shadow p-2 rounded text-primary uppercase w-full mb-4">
              Register
            </button>
            <div className="flex justify-between text-sm space-x-1">
              <div className="flex space-x-1">
                <div>Already registered?</div>
                <Link href="/login">
                  <div className="text-center transition hover:underline cursor-pointer mb-4">
                    Login
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
      </div>
    </>
  )
}

export default Register
