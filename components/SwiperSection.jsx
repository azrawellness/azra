import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderOne from '../public/slider/slider-1.jpg'
import sliderTwo from '../public/slider/slider-2.jpg'
import sliderThree from '../public/slider/slider-3.jpg'
import { Dash, WhatsAppButton, Image } from '../components'

const SwiperSection = () => {
  return (
    <div className="h-auto w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full lg:h-128 z-10"
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative z-10">
            <div className="absolute bottom-0 bg-gradient-to-r from-white/90 to-transparent p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-lg lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                <div>Welcome to Azra - Your Personal Dietitian</div>
              </div>
              <div className="text-xl lg:text-7xl font-title w-full mb-4">
                Easy to Follow <br /> Diet Plans from Rs 1730
              </div>
              <div className="text-lg lg:text-xl text-black mb-4">
                Weight Loss | Weight Gain | Hypertension | Pregnancy <br />|
                PCOS | Diabetes | Renal | Thyroid | Child-Nutrition | Sports
                Nutrition
              </div>
              <WhatsAppButton />
            </div>
            <Image src={sliderOne} alt="Slide One" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute bottom-0 bg-gradient-to-r from-white/90 to-transparent p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-lg lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                Start Your Heath Journey Now
              </div>
              <div className="text-7xl font-title w-full mb-4">
                Eat <span className="text-primary">Right</span> <br />
                Stay Bright
              </div>
              <div className="text-xl text-black mb-4">
                Simple Diet Plans - That Work Wonders!
              </div>
              <button className="bg-primary text-white rounded-3xl px-4 py-2">
                WhatsApp Senior Dietitian Now
              </button>
            </div>
            <Image src={sliderTwo} alt="Slide One" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute bottom-0 bg-gradient-to-r from-white/90 to-transparent p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-lg lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                Health is in your hands
              </div>
              <div className="text-7xl font-title w-full mb-4">
                15000+ <span className="text-primary px-2">Satisfied</span>
                <br />
                Healthy clients
              </div>
              <div className="text-xl text-black mb-4">
                Personal Nutritionist for every need
              </div>
              <button className="bg-primary text-white rounded-3xl px-4 py-2">
                WhatsApp Senior Dietitian Now
              </button>
            </div>
            <Image src={sliderThree} alt="Slide One" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSection
