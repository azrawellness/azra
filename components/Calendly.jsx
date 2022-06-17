import { InlineWidget } from 'react-calendly'

const Calendly = () => {
  return (
    <div className="bg-white py-28">
      <div className="container mx-auto">
        <div className="text-center font-title text-4xl mb-10">
          Schedule Free Consultation with Senior Nutritionist
        </div>
        <InlineWidget url="https://calendly.com/azrawellnessexpert/30min?hide_gdpr_banner=1" />
      </div>
    </div>
  )
}

export default Calendly
