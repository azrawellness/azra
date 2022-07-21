import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

const Dashboardlayout = ({ children }) => {
  const { logout } = useAuth()
  const router = useRouter()

  const logoutUser = async () => {
    await logout()

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Azra - Dashboard</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="scroll-smooth bg-gray-dashboard min-h-screen h-full">
        <nav className="px-4 py-2 bg-secondary">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-xl text-white">
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </div>
              <button
                onClick={logoutUser}
                className="bg-white text-secondary px-2 py-1 rounded shadow"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto">
          <div className="w-full overflow-y-scroll">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Dashboardlayout
