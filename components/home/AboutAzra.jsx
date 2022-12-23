import {
  faBookMedical,
  faClock,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dash, Image } from '../../components'
import aboutAzraImage from '../../public/images/home/about-azra-section-image.jpg'

const AboutAzra = () => {
  return (
    <div className="bg-white h-full min-h-screen px-4 lg:px-28 py-16 lg:py-24 flex flex-col lg:flex-row items-center space-y-10 lg:space-x-20">
      <div className="w-full lg:w-1/2">
        <div>
          <div className="text-primary flex items-center space-x-2 mb-4 font-semibold">
            <Dash border="border" hidden={false} />
            <div>About Azrah</div>
          </div>
          <div className="text-4xl lg:text-5xl font-title w-full max-w-md mb-4">
            Start Your Healthy Journey Now
          </div>
          <div className="text-gray-dark font-normal">
            At Azrah, we are a vibrant team of health enthusiasts, who are
            dedicated to nutrition and wellbeing. Our nutritionists are
            professionals with in-depth knowledge and extensive experience. We
            design medically sound diet plans for you – so that you become
            healthier each day. Talk to our senior dietitian now, to start with
            your healthy journey now.
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t-2 border-gray mt-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray">
          <div className="flex p-4">
            <div className="w-1/6 lg:w-2/6">
              <FontAwesomeIcon
                className="text-primary"
                size="2x"
                icon={faClock}
              />
            </div>
            <div className="w-5/6 lg:w-4/6 text-xl">
              Diets Specially Made For You
            </div>
          </div>
          <div className="flex p-4">
            <div className="w-1/6 lg:w-2/6">
              <FontAwesomeIcon
                className="text-primary"
                size="2x"
                icon={faPerson}
              />
            </div>
            <div className="w-5/6 lg:w-4/6 text-xl">
              Online Personal Nutritionists For You
            </div>
          </div>
          <div className="flex p-4">
            <div className="w-1/6 lg:w-2/6">
              <FontAwesomeIcon
                className="text-primary"
                size="2x"
                icon={faBookMedical}
              />
            </div>
            <div className="w-5/6 lg:w-4/6 text-xl">
              Nutritionists with Medical Experience
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative lg:shadow-custom shadow-primary">
        <div className="absolute bottom-5 lg:bottom-10 border-l-8 border-primary left-5 lg:left-10 z-40 bg-black py-4 pl-4 pr-10 lg:pr-16 text-gray">
          <div className="text-xl lg:text-3xl font-title">15 Years</div>
          <div>Experience</div>
        </div>
        <Image
          src={aboutAzraImage}
          lazyBoundary="800px"
          layout="responsive"
          alt="About Azrah"
        />
      </div>
    </div>
  )
}

export default AboutAzra
