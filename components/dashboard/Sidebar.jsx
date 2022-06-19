import {
  faArrowRightFromBracket,
  faComment,
  faFolderTree,
  faHashtag,
  faHome,
  faListCheck,
  faNewspaper,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext'
import Logo from '../../public/logo.png'
import { SIDEBAR_LINKS } from '../../utils/constants'

const Sidebar = () => {
  const { logout } = useAuth()
  const router = useRouter()

  const logoutUser = async () => {
    await logout()

    router.push('/')
  }

  return (
    <div className="bg-white shadow h-full min-h-screen px-2 py-4">
      <div className="relative h-16 w-16 mx-auto mb-4">
        <Image src={Logo} alt="Azra" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col space-y-4">
        {SIDEBAR_LINKS.map((link, index) => (
          <Link href={link.href} key={index}>
            <a
              className={`flex w-full space-x-2 ${
                link.nested
                  ? router.pathname.match(link.href)
                    ? 'bg-black text-white'
                    : 'bg-gray-dashboard'
                  : router.pathname === link.href
                  ? 'bg-black text-white'
                  : 'bg-gray-dashboard'
              } p-2 cursor-pointer rounded-xl items-center hover:bg-black hover:text-white transition`}
            >
              <FontAwesomeIcon fixedWidth icon={link.icon} />
              <span>{link.name}</span>
            </a>
          </Link>
        ))}

        <button
          onClick={logoutUser}
          className="flex w-full space-x-2 bg-gray-dashboard p-2 rounded-xl items-center hover:bg-black hover:text-white transition"
        >
          <FontAwesomeIcon fixedWidth icon={faArrowRightFromBracket} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
