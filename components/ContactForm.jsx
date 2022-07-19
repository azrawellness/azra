import { useRef, useState } from 'react'

const ContactForm = ({ rounded = false }) => {
  const formEl = useRef(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const response = await fetch(e.currentTarget.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.status === 200) {
      setLoading(false)
      setSuccess(true)
      setStatus("Thank you for contacting. We'll get in touch with you soon!")
      if (formEl && formEl.current) {
        formEl.current.reset()
      }
    } else {
      setLoading(false)
      setSuccess(false)
      setStatus('Oops! There was a problem submitting your form')
    }
  }

  return (
    <div className="bg-primary text-white py-28">
      <div className="text-center font-title text-black text-4xl mb-10">
        Make an online appointment (It’s free)
      </div>
      <div className="w-full bg-white rounded shadow max-w-3xl mx-auto flex flex-row space-x-6 px-6 py-10">
        <div className="w-full">
          <form
            ref={formEl}
            onSubmit={handleSubmit}
            id="contact-form"
            action="https://formspree.io/f/xjvlnyvq"
            method="POST"
          >
            <div className="form-control flex flex-col py-4">
              <label htmlFor="name" className="text-black text-xl">
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="text-2xl bg-primary dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-4">
              <label htmlFor="email" className="text-black text-xl">
                City
              </label>
              <input
                type="city"
                required
                id="city"
                name="city"
                className="text-2xl bg-primary dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
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
                className="text-2xl bg-primary dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
            <div className="form-control flex flex-col py-4">
              <label htmlFor="phone" className="text-black text-xl">
                WhatsApp Number
              </label>
              <input
                type="text"
                required
                id="phone"
                name="phone"
                className="text-2xl bg-primary dark:bg-alternate text-white dark:text-primary focus:outline-none rounded p-2 shadow-sm"
              />
            </div>
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
                className="disabled:opacity-50 bg-primary dark:bg-primary-dark text-white dark:text-white w-full md:w-auto px-4 py-2 font-primary rounded"
              >
                {loading ? 'Submitting...' : 'Schedule my appointment'}
              </button>
            </div>
            <div className="py-4 text-black">
              You will get appointment details on WhatsApp instantly.{' '}
            </div>
            {status ? (
              <div
                className={`${
                  success ? 'bg-green' : 'bg-red'
                } w-full my-4 rounded py-2 px-2 text-white`}
              >
                {status}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
