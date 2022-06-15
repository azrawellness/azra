import { Dash, FeatureCard, SwiperSection } from '../components'
import Image from 'next/image'
import aboutAzraImage from '../public/images/home/about-azra-section-image.jpg'

const Home = () => {
  return (
    <div className="h-full bg-white w-full pb-10">
      {/* Homepage Slider Section */}
      <SwiperSection />
      {/* Three Card Section */}
      <div className="relative mt-4 lg:mt-0 lg:h-60 mx-auto">
        <div className="lg:-mt-16 lg:absolute lg:z-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-4 lg:gap-0 lg:px-28">
            <FeatureCard
              title="Customized Diet Plans"
              desscription="We treat you as an individual. You are not a blood-group, body-type, or body-shape for us. You are you, and you are awesome. Your diet plan with us will be unique, customized, and specifically made for your needs."
            />
            <FeatureCard
              title="Personal Online Nutritionist"
              desscription="Food has a special ability to bring people together. Our
                    dietitians and nutrition experts have a minimum of 5 years of
                    experience. They are medically trained to handle complex body
                    types. Wherever you go, wherever you are we make sure that
                    your diet plan doesn’t get hampered ever.."
            />
            <FeatureCard
              title="Targeting Goals"
              desscription="Your goal can be weight-loss, weight-gain, getting fit for
                  your wedding, tackling PCOS, blood pressure, gastric issues,
                  thyroid, diabetes, pregnancy symptoms, or anything else. Our
                  nutritionists are capable to tackle your goal. We are ready
                  for your goal!"
            />
          </div>
        </div>
      </div>
      {/* About Azra Section */}
      <div className="bg-white h-full min-h-screen px-4 lg:px-28 py-16 lg:py-24 flex flex-col lg:flex-row items-center space-y-10 lg:space-x-20">
        <div className="w-full lg:w-1/2">
          <div className="text-primary flex items-center space-x-2 mb-4 font-semibold">
            <Dash border="border" hidden={false} />
            <div>About Azra</div>
          </div>
          <div className="text-4xl lg:text-5xl font-title w-full max-w-md mb-4">
            Start Your Healthy Journey Now
          </div>
          <div className="text-gray-dark font-normal">
            At Azra, we are a vibrant team of health enthusiasts, who are
            dedicated to nutrition and wellbeing. Our nutritionists are
            professionals with in-depth knowledge and extensive experience. We
            design medically sound diet plans for you – so that you become
            healthier each day. Talk to our senior dietitian now, to start with
            your healthy journey now.
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative lg:shadow-custom shadow-primary">
          <div className="absolute bottom-10 border-l-8 border-primary left-10 z-40 bg-black py-4 pl-4 pr-16 text-gray">
            <div className="text-3xl font-title">15 Years</div>
            <div>Experience</div>
          </div>
          <Image src={aboutAzraImage} layout="responsive" alt="About Azra" />
        </div>
      </div>
    </div>
  )
}

export default Home
