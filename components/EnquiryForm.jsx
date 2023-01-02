import { useRef, useState } from "react";
import bg from "../public/images/formBgBlur.jpg";
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const EnquiryForm = ({ rounded = false }) => {
  const formEl = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const response = await fetch(e.currentTarget.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.status === 200) {
      setLoading(false);
      setSuccess(true);
      setStatus("Thank you for contacting. We'll get in touch with you soon!");
      if (formEl && formEl.current) {
        formEl.current.reset();
      }
    } else {
      setLoading(false);
      setSuccess(false);
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className=" text-black "  style={{ backgroundImage: `url(${bg.src})` , backgroundSize:'cover' , backgroundPosition:'center'}}>
      <div className="rounded shadow  w-[90vw] md:w-[60vw] lg:w-[40vw] my-5 flex flex-col  px-8 py-8 ">
        <FontAwesomeIcon icon={faLeaf} className='text-primary text-[3rem] self-start m-4' />
        <h3 className="font-bold text-2xl">We Are Excited To Make You Healthier</h3> <br />
        <h3 className="text-xl">WhatsApp us or Chat with us - We respond immediately!</h3><br />
        <div className="w-full">
          <form
            ref={formEl}
            onSubmit={handleSubmit}
            id="contact-form"
            action="https://formspree.io/f/mvonpyzw"
            method="POST"
          >
            <div className="form-control flex flex-col py-2 ">
              <label htmlFor="name" className="text-black lg:text-xl">
                Your Name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="text-l border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-2">
              <label htmlFor="name" className="text-black lg:text-xl">
                Your email
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                className="text-l border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col py-2">
              <label htmlFor="phone" className="text-black lg:text-xl">
                Your WhatsApp Number
              </label>
              <input
                type="text"
                required
                id="phone"
                name="phone"
                className="text-l  border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>



            {/* <div className="form-control flex flex-col py-4">
              <label htmlFor="email" className="text-black text-xl">
                City
              </label>
              <input
                type="city"
                required
                id="city"
                name="city"
                className="text-2xl  border-primary border-2 dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-4">
              <label htmlFor="phone" className="text-black text-xl">
                Country
              </label>
              <input
                type="text"
                required
                id="country"
                name="country"
                className="text-2xl  border-primary border-2 dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div> */}

            <div className="form-control flex flex-col py-4">
              <div
                className="g-recaptcha"
                data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA}
              ></div>
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className="disabled:opacity-50 bg-primary text-white font-bold w-full md:w-auto px-4 py-2 font-primary rounded"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            {status ? (
              <div
                className={`${success ? "bg-green" : "bg-red"
                  } w-full my-4 rounded py-2 px-2 text-white`}
              >
                {status}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
