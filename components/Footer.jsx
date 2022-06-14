import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-secondary text-gray">
      {/* Top Footer */}
      <div className="flex container mx-auto py-10">
        <div className="w-1/3">
          <div className="text-xl font-semibold border-b inline-flex pb-2 mb-4 uppercase">
            Links
          </div>
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/client-reviews">Client Reviews</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="text-xl font-semibold border-b inline-flex pb-2 mb-4 uppercase">
            More Information
          </div>
          <div className="my-4">
            India, USA, UK, Canada, UAE, Qatar, Saudi Arabia, New Zealand,
            Australia, South Africa, Kenya, Singapore
          </div>
          <div className="flex flex-col">
            <div>
              <a href="tel:+91-9899-1919-36">+91-9899-1919-36</a>
            </div>
            <div>
              <a href="mailto:info@azra.in">info@azra.in</a>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="text-xl font-semibold border-b inline-flex pb-2 mb-4 uppercase">
            Follow Us
          </div>
          <div className="my-4">
            India, USA, UK, Canada, UAE, Qatar, Saudi Arabia, New Zealand,
            Australia, South Africa, Kenya, Singapore
          </div>
          <div className="flex flex-col">
            <div>
              <a href="tel:+91-9899-1919-36">+91-9899-1919-36</a>
            </div>
            <div>
              <a href="mailto:info@azra.in">info@azra.in</a>
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
