import { Calendly, Header, ServiceCard, Layout } from '../../components'
import serviceOne from '../../public/services/services_1.jpeg'
import serviceTwo from '../../public/services/services_2.jpeg'
import serviceThree from '../../public/services/services_3.jpeg'
import serviceFour from '../../public/services/services_4.jpeg'
import serviceFive from '../../public/services/services_5.jpeg'
import serviceSix from '../../public/services/services_6.jpeg'
import serviceSeven from '../../public/services/services_7.jpeg'
import serviceEight from '../../public/services/services_8.jpeg'
import serviceNine from '../../public/services/services_9.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <div className="bg-gray text-black">
      <Header title="Services" />
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4 lg:px-0 mb-10">
          <ServiceCard
            imageSrc={serviceOne}
            title="Weight Management"
            description="Nutritional Coaching to normalize BMI healthily without any side effects"
            buttonLink="/services/weight-management"
          />
        </div>
      </div>
      <Calendly />
    </div>
  )
}

export default Services
