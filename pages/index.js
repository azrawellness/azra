import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FeatureCard } from '../components'
import sliderOne from '../public/slider/slider-1.jpg'
import sliderTwo from '../public/slider/slider-2.jpg'
import sliderThree from '../public/slider/slider-3.jpg'

const Home = () => {
  return (
    <div className="h-full bg-gray flex items-center justify-center">
      <div className="h-auto w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-72 lg:h-128 z-10"
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="relative z-10">
              <div className="absolute p-12 lg:p-24 z-30 lg:top-10">
                <div className="text-primary text-xl mb-4 flex items-center lg:space-x-2">
                  <hr className="hidden lg:flex w-10 border-2" />
                  <div>Health is in your hands</div>
                </div>
                <div className="text-xl lg:text-7xl font-title w-full mb-4">
                  15000+ <span className="text-primary px-2">Satisfied</span>
                  <br />
                  Healthy clients
                </div>
                <div className="text-xl text-gray-dark mb-4">
                  Personal Nutritionist for every need
                </div>
                <button className="bg-primary text-white rounded-3xl px-4 py-2">
                  WhatsApp Senior Dietician Now
                </button>
              </div>
              <Image src={sliderOne} alt="Slide One" />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="relative">
              <div className="absolute p-24 z-50 top-10">
                <div className="text-primary text-xl mb-4">
                  Health is in your hands
                </div>
                <div className="text-7xl font-title w-full mb-4">
                  15000+ <span className="text-primary px-2">Satisfied</span>
                  <br />
                  Healthy clients
                </div>
                <div className="text-xl text-gray-dark mb-4">
                  Personal Nutritionist for every need
                </div>
                <button className="bg-primary text-white rounded-3xl px-4 py-2">
                  WhatsApp Senior Dietician Now
                </button>
              </div>
              <Image src={sliderTwo} alt="Slide One" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="absolute p-24 z-50 top-10">
                <div className="text-primary text-xl mb-4">
                  Health is in your hands
                </div>
                <div className="text-7xl font-title w-full mb-4">
                  15000+ <span className="text-primary px-2">Satisfied</span>
                  <br />
                  Healthy clients
                </div>
                <div className="text-xl text-gray-dark mb-4">
                  Personal Nutritionist for every need
                </div>
                <button className="bg-primary text-white rounded-3xl px-4 py-2">
                  WhatsApp Senior Dietician Now
                </button>
              </div>
              <Image src={sliderThree} alt="Slide One" />
            </div>
          </SwiperSlide> */}
        </Swiper>
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
      </div>
    </div>
  )
}

export default Home
