import Head from 'next/head'
import Script from 'next/script'
import { Footer, TopNavbar, Navbar, WhatsAppButton } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azra - Multi-Speciality Wellness Expert</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-tag" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Script src="//code.tidio.co/d9gzmro8azj6easjo5fpeqxmror6mxmc.js" async />

      <div className="scroll-smooth relative">
        <TopNavbar />
        <Navbar />
        <div className="w-full scroll-smooth font-body text-black h-full bg-gray">
          {children}
        </div>
        <Footer />
        <div className="right-0 top-1/2 z-50 fixed">
          <WhatsAppButton
            classes="bg-primary text-white rounded-l-3xl px-4 py-2 space-x-2 items-center inline-flex"
            text="WhatsApp Senior Dietitian"
          />
        </div>
      </div>
    </>
  )
}

export default Layout
