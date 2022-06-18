import nookies from 'nookies'
import { firebaseAdmin } from '../../firebase-admin.js'
import Head from 'next/head.js'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Azra - Dashbaord</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>Dashboard</div>
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
