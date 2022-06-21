import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Calendly, Header, Layout } from '../components'

const ContactUs = () => {
  return (
    <div className="bg-gray text-black">
      <Header title="Contact Us" />
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row w-full px-4 lg:px-0 space-y-4 lg:space-y-0 lg:space-x-10 text-gray">
          <div className="bg-primary px-10 pt-10 py-16 shadow w-full">
            <div className="text-3xl font-title mb-4 pb-1 border-b border-white inline-flex">
              Main Branch
            </div>
            <div>Delhi Corporate Office</div>
            <div>Regal Building, Connaught Place,</div>
            <div>New Delhi - 110001</div>
          </div>
          <div className="bg-primary px-10 pt-10 pb-16 shadow w-full">
            <div className="text-3xl font-title mb-4 pb-1 border-b border-white inline-flex">
              Quick Contact
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+919899191936">+91-9899-1919-36</a>
            </div>
            <a href="mailto:info@azra.in">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@azra.in
            </a>
          </div>
        </div>
      </div>
      <Calendly />
      <div className="container mx-auto py-10">
        <div className="text-black font-title text-xl lg:text-4xl max-w-4xl mx-auto px-4 lg:px-0 lg:text-center my-10">
          We work with health-seeking clients like you, across the world. Some
          of our offices are at:
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 px-4 lg:px-0">
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Bengaluru Regional Office
            </div>
            <div className="mt-2">
              Level 14, Concorde Towers, UB City, 1 Vittal Mallya Road,
              Bengaluru 560001
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Chennai Regional Office
            </div>
            <div className="mt-2">
              Samson Towers, 8th Floor at Pantheon Road, and Casa Major Road,
              Block 31, Egmore Village, Chennai, 600008
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Hyderabad Regional Office
            </div>
            <div className="mt-2">
              18, ILabs Centre, Level 2, Oval Building, Hyderabad, Telangana
              500081
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Kolkata Regional Office
            </div>
            <div className="mt-2">
              DP-5, DP Block, Sector V, Bidhannagar Godrej Waterside Kolkata
              700091
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Mumbai Regional Office
            </div>
            <div className="mt-2">
              Boston House, Andheri East, Mumbai, Maharashtra 400093
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Dehradun Regional Office
            </div>
            <div className="mt-2">
              Plot #22, IT Park, Sahastradhara Rd, Dehradun, Uttarakhand 248001
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Lucknow Regional Office
            </div>
            <div className="mt-2">
              Cyber Heights, TC-212, 2nd Floor, Levana, Vibhuti Khand, Gomti
              Nagar, Lucknow, Uttar Pradesh 226010
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-primary font-title text-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              International
            </div>
            <div className="mt-2">
              USA, Canada, Australia, UK, UAE, Saudi Arabia, Kuwait, Bahrain,
              Qatar, Singapore
            </div>
          </div>
        </div>
        <div className="font-primary font-semibold text-sm mt-4 mb-16 px-4 lg:px-0">
          *For more information here we provide separate department contact
          person details, please contact them.
        </div>
      </div>
    </div>
  )
}

export default ContactUs
