import Script from 'next/script'

const Calendly = () => {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="bg-white py-10 lg:py-28 px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="text-center font-title text-4xl mb-10">
            Schedule Free Consultation with Senior Nutritionist
          </div>
          <div
            className="calendly-inline-widget w-full h-188 lg:h-160"
            data-url="https://calendly.com/azrawellnessexpert/30min?&hide_gdpr_banner=1"
          ></div>
        </div>
      </div>
    </>
  )
}

export default Calendly
