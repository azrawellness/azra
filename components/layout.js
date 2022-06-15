import Head from 'next/head'
import { Footer, TopNavbar, Navbar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azra - Multi-Speciality Wellness Expert</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="scroll-smooth">
        <TopNavbar />
        <Navbar />
        <div className="w-full scroll-smooth font-body text-black h-full">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
