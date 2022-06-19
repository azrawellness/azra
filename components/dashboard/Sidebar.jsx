import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {
  faHome,
  faNewspaper,
  faComment,
  faArrowRightFromBracket,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../public/logo.png'
import { useAuth } from '../../context/AuthContext'
import Router, { useRouter } from 'next/router'

const Sidebar = () => {
  const { logout } = useAuth()
  const router = useRouter()

  const logoutUser = async () => {
    await logout()

    router.push('/dashboard/login')
  }

  return (
    <div className="bg-white shadow h-full min-h-screen px-2 py-4">
      <div className="relative h-16 w-16 mx-auto mb-4">
        <Image src={Logo} alt="Azra" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="/dashboard">
          <a className="flex w-full space-x-2 bg-gray-dashboard p-2 cursor-pointer rounded-xl items-center">
            <FontAwesomeIcon fixedWidth icon={faHome} /> <span>Home</span>
          </a>
        </Link>
        <Link href="/dashboard/posts">
          <a className="flex w-full space-x-2 bg-gray-dashboard p-2 cursor-pointer rounded-xl items-center">
            <FontAwesomeIcon fixedWidth icon={faNewspaper} /> <span>Posts</span>
          </a>
        </Link>
        <Link href="/dashboard/client-reviews">
          <a className="flex w-full space-x-2 bg-gray-dashboard p-2 cursor-pointer rounded-xl items-center">
            <FontAwesomeIcon fixedWidth icon={faStar} />
            <span>Client Reviews</span>
          </a>
        </Link>
        <Link href="/dashboard/testimonials">
          <a className="flex w-full space-x-2 bg-gray-dashboard p-2 cursor-pointer rounded-xl items-center">
            <FontAwesomeIcon fixedWidth icon={faComment} />
            <span>Testimonials</span>
          </a>
        </Link>

        <button
          onClick={logoutUser}
          className="flex w-full space-x-2 bg-gray-dashboard p-2 rounded-xl items-center"
        >
          <FontAwesomeIcon fixedWidth icon={faArrowRightFromBracket} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
