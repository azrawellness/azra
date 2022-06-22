import Link from 'next/link'

const Calendly = () => {
  return (
    <div className="bg-white py-10 lg:py-16 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="text-center font-title text-4xl mb-10">
          Schedule Free Consultation with Senior Nutritionist
        </div>
        <div className="flex items-center justify-center">
          <Link href="/schedule-consultation">
            <a className="bg-primary px-4 text-center py-2 rounded shadow text-xl text-white">
              Also pls change button to Book My Free Consultation with a Senior
              Nutritionist
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Calendly
