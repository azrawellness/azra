import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-secondary text-gray">
      {/* Top Footer */}
      <div className="flex flex-col lg:flex-row container mx-auto py-10 px-4 lg:px-0 space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <div className="text-xl font-semibold border-b inline-flex pb-2 mb-4 uppercase">
            Links
          </div>
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/client-reviews">Client Reviews</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="text-xl font-semibold border-b inline-flex pb-2 mb-4 uppercase">
            More Information
          </div>
          <div className="my-4">
            India, USA, UK, Canada, UAE, Qatar, Saudi Arabia, New Zealand,
            Australia, South Africa, Kenya, Singapore
          </div>
          <div className="flex flex-col">
            <div>
              <a href="tel:+91-9899-1919-36">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91-9899-1919-36</span>
              </a>
            </div>
            <div>
              <a href="mailto:info@azra.in">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>info@azra.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className=" bg-black-alternate text-gray">
        <div className="container mx-auto flex justify-center items-center h-full py-4">
          <div>
            <span>Copyright {currentYear} &#169;</span>
            <span className="text-primary"> Azra.</span>
            <span> All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
