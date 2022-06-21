import Head from 'next/head'
import Script from 'next/script'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azra - Login</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-tag" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}

      <div className="scroll-smooth min-h-screen h-full flex items-center justify-center">
        {children}
      </div>
    </>
  )
}

export default AuthLayout
