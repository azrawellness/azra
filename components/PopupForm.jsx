import { useRef, useState } from "react";
import bg from "../public/images/home/formbg.png";
const PopupForm = ({ rounded = false, refPopup, setShow }) => {
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
    <div
      ref={refPopup}
      className="top-[-100%] popupform border-2 text-black  absolute lg:w-[50vw]  md:w-[70vw] w-[80vw]  left-[50%] translate-x-[-50%] z-[100] "
    >
      <div className="relative z-40 w-full h-5 bg-white ">
        {" "}
        <button
          onClick={() => {
            (refPopup.current.style.top = "-100%"), setShow(false);
          }}
          className="bg-red p-1 px-3  absolute left-[97%] top-[-1.5rem] text-4xl text-white rounded-2xl "
        >
          x
        </button>
      </div>
      <div className="text-center  text-black bg-white relative ">
        <h2 className="text-primary font-title text-2xl  lg:text-3xl font-bold">
          Book An Appointment
        </h2>
        <p
          style={{ backgroundImage: `url(${bg.src})` }}
          className={` text-md bg-no-repeat bg-contain bg-center`}
        >
          Sign Up For a Free 1-on-1 Discovery Call on Phone with our
          Nutritionists to discuss your Health Challenges & Goals <br /> Just
          drop in your details & we shall get back to you later at your
          preferred time..
        </p>
      </div>
      <div className="w-full bg-white rounded shadow mx-auto flex flex-row  px-2">
        <div className="w-full">
          <form
            ref={formEl}
            onSubmit={handleSubmit}
            id="contact-form"
            action="https://formspree.io/f/xqkozjpz"
            method="POST"
          >
            <div className="form-control flex flex-col py-2">
              <label htmlFor="name" className="text-black text-lg">
                Your Name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="text-xl border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-2">
              <label htmlFor="phone" className="text-black text-lg">
                Your Mobile Number
              </label>
              <input
                type="text"
                required
                id="phone"
                name="phone"
                className="text-xl  border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-2">
              <label htmlFor="whatsapp" className="text-black text-lg">
                Your WhatsApp Number
              </label>
              <input
                type="text"
                required
                id="whatsapp"
                name="whatsapp"
                className="text-xl  border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-2">
              <label htmlFor="location" className="text-black text-lg">
                Your Location & Preferred Time to Speak
              </label>
              <input
                type="text"
                required
                id="location"
                name="location"
                className="text-xl  border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-2">
              <label htmlFor="goals" className="text-black text-lg">
                Add goal you wish to achieve
              </label>
              <input
                type="text"
                required
                id="goals"
                name="goals"
                className="text-xl  border-primary border-2 dark:bg-alternate  dark:text-primary focus:outline-none rounded p-2 shadow-sm"
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

            <div className="form-control flex flex-col py-2">
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
                {loading ? "Submitting..." : "Schedule my appointment"}
              </button>
            </div>
            <div className="py-4 text-black">
              You will get appointment details on WhatsApp instantly.{" "}
            </div>
            {status ? (
              <div
                className={`${
                  success ? "bg-green" : "bg-red"
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

export default PopupForm;
