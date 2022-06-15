import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import sliderOne from '../public/slider/slider-1.jpg'
import sliderTwo from '../public/slider/slider-2.jpg'
import sliderThree from '../public/slider/slider-3.jpg'
import { Dash, WhatsAppButton } from '../components'

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
            <div className="absolute p-12 lg:p-24 z-30 lg:top-10">
              <div className="text-primary text-lg lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                <div>Health is in your hands</div>
              </div>
              <div className="text-xl lg:text-7xl font-title w-full mb-4">
                15000+ <span className="text-primary px-2">Satisfied</span>
                <br />
                Healthy clients
              </div>
              <div className="text-lg lg:text-xl text-gray-dark mb-4">
                Personal Nutritionist for every need
              </div>
              <WhatsAppButton />
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
    </div>
  )
}

export default SwiperSection
