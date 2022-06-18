import { faBars, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import { useAuth } from '../context/AuthContext'
import logo from '../public/logo.png'
import { NAVBAR_LINKS } from '../utils/constants'
import { Image } from '../components'

const Navbar = () => {
  // const { user } = useAuth()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = router

  const onLinkClick = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    })

    if (menuOpen) {
      setMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav className="h-full w-full">
      <div
        className={`container h-full mx-auto px-4 lg:px-0 w-full ${
          menuOpen ? 'bg-white dark:bg-primary' : ''
        }`}
      >
        <div className="flex lg:flex-col h-full justify-between w-full items-center">
          <div className="flex w-full">
            <div className="hidden lg:flex lg:w-3/12"></div>
            <div className="w-2/3 lg:w-6/12 flex justify-start lg:justify-center">
              <Link href="/" passHref>
                <div className="relative h-20 w-28 lg:h-40 lg:w-60 cursor-pointer">
                  <Image
                    src={logo}
                    layout="fill"
                    objectFit="contain"
                    alt="Pawan Kumar"
                  />
                </div>
              </Link>
            </div>
            <div className="hidden lg:w-3/12 lg:flex flex-col space-y-2 items-center justify-center">
              <div className="font-bold">Speak to Senior Dietitian Now</div>
              <a
                className="text-primary font-semibold"
                href="tel:+91-9899191936"
              >
                <FontAwesomeIcon bounce icon={faPhone} className="mr-2" />
                +919899-19191-36
              </a>
            </div>
          </div>
          <div className="flex w-1/3 lg:hidden justify-end items-center">
            <button onClick={onLinkClick} aria-label="Menu Button">
              <FontAwesomeIcon
                size="2x"
                icon={menuOpen ? faXmark : faBars}
                className=""
              />
            </button>
          </div>
          <div className="hidden w-full lg:flex justify-center font-body text-xl font-normal flex-col lg:flex-row items-end space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 h-10">
            {NAVBAR_LINKS.map((link, index) => (
              <Link key={index} href={link.href}>
                <a
                  className={`${
                    router.pathname === link.href
                      ? 'border-primary border-b-2 text-primary'
                      : 'text-black border-white'
                  }  px-3 py-1 h-10 transition hover:border-primary hover:border-b-2`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            {/* {user && (
              <Link href="/dashboard">
                <a
                  className={`${
                    router.pathname.match('/dashboard')
                      ? 'bg-primary dark:bg-white text-white dark:text-primary '
                      : 'text-primary dark:text-white'
                  } rounded-3xl px-3 py-1 transition hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white`}
                >
                  Dashboard
                </a>
              </Link>
            )} */}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        } justify-between z-50 absolute top-0 left-0 right-0 bottom-0 border-primary duration-300 origin-top transform-gpu bg-white dark:bg-primary w-full transition content-center items-center py-4`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Menu Button"
          className="right-5 top-5 absolute"
        >
          <FontAwesomeIcon size="2x" icon={faXmark} className="" />
        </button>
        <div className="flex w-full justify-center flex-col lg:flex-row  font-title font-normal text-3xl items-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 h-full lg:h-12">
          {NAVBAR_LINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              <a
                className={`${
                  router.pathname === link.href
                    ? 'bg-primary dark:bg-white text-white dark:text-primary '
                    : 'text-primary dark:text-white'
                } rounded-3xl px-3 py-1 transition hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          {/* {user && (
            <Link href="/dashboard">
              <a
                className={`${
                  router.pathname.match('/dashboard')
                    ? 'bg-primary dark:bg-white text-white dark:text-primary '
                    : 'text-primary dark:text-white'
                } rounded-3xl px-3 py-1 transition hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white`}
              >
                Dashboard
              </a>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
