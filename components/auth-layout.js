import Head from 'next/head'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azra - Dashbaord</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="scroll-smooth min-h-screen h-full flex items-center justify-center">
        {children}
      </div>
    </>
  )
}

export default AuthLayout
