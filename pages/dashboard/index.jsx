import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head.js'
import Link from 'next/link'
import nookies from 'nookies'
import { firebaseAdmin } from '../../firebase-admin.js'
import { SIDEBAR_LINKS } from '../../utils/constants.js'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Azra - Dashbaord</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="my-10">
        <div className="grid grid-cols-4 gap-4">
          {SIDEBAR_LINKS.map((link, index) => (
            <Link href={link.disabled ? '/dashboard' : link.href} key={index}>
              <a className="flex flex-col justify-center bg-secondary text-white h-48 w-full space-y-4 text-xl font-semibold p-2 cursor-pointer rounded-xl items-center hover:bg-primary hover:text-white transition">
                <FontAwesomeIcon fixedWidth size="4x" icon={link.icon} />
                <span>{link.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2))
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid } = token

    if (uid) {
      // User authenticated
    }
    return { props: {} }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/dashboard/login',
      },
      props: {},
    }
  }
}

export default Dashboard
