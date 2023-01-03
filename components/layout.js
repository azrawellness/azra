import Head from "next/head";
import Script from "next/script";
import {
  Footer,
  TopNavbar,
  Navbar,
  WhatsAppButton,
  ContactForm,
} from "../components";
import { useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (status) => {
    setIsMenuOpen(status);
  };
  return (
    <>
      <Head>
        <title>Azrah - Wellness Expert</title>
        <meta name="description" content="Azrah Website" />
        <link rel="icon" href="/favnew.png" />
      </Head>
      <Script
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
      </Script>
      <Script
        src="//code.tidio.co/d9gzmro8azj6easjo5fpeqxmror6mxmc.js"
        strategy="afterInteractive"
      />

      <div className="scroll-smooth font-primary font-normal relative">
        <TopNavbar />
        <Navbar toggleMenu={toggleMenu} />
        <div className="w-full scroll-smooth font-primary text-black h-full bg-gray">
          {children}
        </div>
        {/* <ContactForm /> */}
        <Footer />
        <div
          className={`${
            isMenuOpen || router.pathname == "/yoga" ? "hidden" : "flex"
          } right-0 top-14 lg:top-1/2 z-30 fixed`}
        >
          <WhatsAppButton
            classes="bg-primary text-white rounded-l-3xl px-4 py-2 space-x-2 items-center inline-flex"
            text="Get Free Consultation"
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
