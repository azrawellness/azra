import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components";
import EnquiryForm from "../components/EnquiryForm";

const ContactUs = ({
  classes = "bg-primary text-white rounded-3xl py-2  items-center inline-flex",
  text = " Get Free Consultation",
  hideOnMobile = false,
}) => {
  const regionalOfficeAddresses = [
    {
      name: "Bengaluru Regional Office",
      address:
        "Level 14, Concorde Towers, UB City, 1 Vittal Mallya Road, Bengaluru 560001",
    },
    {
      name: "Chennai Regional Office",
      address:
        "Samson Towers, 8th Floor at Pantheon Road, and Casa Major Road, Block 31, Egmore Village, Chennai, 600008",
    },
    {
      name: "Hyderabad Regional Office",
      address:
        "18, ILabs Centre, Level 2, Oval Building, Hyderabad, Telangana 500081",
    },
    {
      name: "Kolkata Regional Office",
      address:
        "DP-5, DP Block, Sector V, Bidhannagar Godrej Waterside Kolkata 700091",
    },
    {
      name: "Mumbai Regional Office",
      address: "Boston House, Andheri East, Mumbai, Maharashtra 400093",
    },
    {
      name: "Dehradun Regional Office",
      address:
        "Plot #22, IT Park, Sahastradhara Rd, Dehradun, Uttarakhand 248001",
    },
    {
      name: "Lucknow Regional Office",
      address:
        "Cyber Heights, TC-212, 2nd Floor, Levana, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    },
    {
      name: "International",
      address:
        "USA, Canada, Australia, UK, UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, Singapore",
    },
  ];

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
            {/* <a href="mailto:info@azra.in">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@azra.in
            </a> */}

            <div>
              <FontAwesomeIcon
                size="xl"
                icon={faWhatsapp}
                className="mr-2 font-bold"
              />
              <a
                href="https://api.whatsapp.com/send/?phone=919899191936&text=Hello&app_absent=0"
                target="_blank"
                className={`${classes} ${
                  hideOnMobile ? "border-2 border-white" : ""
                }`}
                rel="noreferrer"
              >
                <div className={`${hideOnMobile ? "hidden lg:flex" : "flex"}`}>
                  {text}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="text-black font-title text-xl lg:text-4xl max-w-4xl mx-auto px-4 lg:px-0 lg:text-center my-10">
          We work with health-seeking clients like you, across the world. Some
          of our offices are at:
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 px-4 lg:px-0">
          {regionalOfficeAddresses.map((regionalAddress, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:px-4 lg:pt-4 lg:pb-8 rounded shadow"
            >
              <div className="text-primary font-title text-2xl">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                {regionalAddress.name}
              </div>
              <div className="mt-2">{regionalAddress.address}</div>
            </div>
          ))}
        </div>
        <div className="font-primary font-semibold text-md mt-4 px-4 lg:px-0">
          *For more information here we provide separate department contact
          person details, please contact them.
        </div>
      </div>

      <div className="w-full flex justify-center ">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default ContactUs;
