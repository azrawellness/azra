import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../public/slider/slider-1.jpg";
import sliderTwo from "../public/slider/slider-2.jpg";
import sliderThree from "../public/slider/slider-3.jpg";
import { Dash, WhatsAppButton } from "../components";
import Image from "./Image";

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
        className="h-60 lg:h-128 z-10"
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative h-60 lg:h-128 z-10">
            <div className="absolute bottom-0 p-6 lg:p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-sm lg:text-xl mb-4 flex items-center lg:space-x-2">
                <Dash />
                <div>Welcome to Azrah - Your Personal Dietitian</div>
              </div>
              <div className="lg:text-7xl font-title w-full mb-4 sm:mb-2 lg:mb-4 sm:text-xl text-LG">
                Easy to Follow <br /> Diet Plans @Rs.4000 | USD 50 | SGD 65 |
                GBP 40 | AUD 71 per month*
              </div>
              <div className="hidden sm:block text-xs lg:text-xl text-black mb-4 sm:mb-2 lg:mb-4 sm:text-md  text-[10px]">
                Weight Loss | Weight Gain | Hypertension | Pregnancy{" "}
                <br className="hidden lg:flex" />| PCOS | Diabetes | Renal |
                Thyroid | Child-Nutrition | Sports Nutrition
              </div>
              <WhatsAppButton classes="bg-primary text-white text-sm lg:text-base rounded-3xl px-2 py-1 lg:px-4 lg:py-2 space-x-2 items-center inline-flex " />
            </div>
            <Image
              src={sliderOne}
              layout="fill"
              objectFit="cover"
              alt="Slide One"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-60 lg:h-128">
            <div className="absolute bottom-0  p-6 lg:p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-sm lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                <div>Start Your Heath Journey Now</div>
              </div>
              <div className="text-xl lg:text-7xl font-title w-full mb-2 lg:mb-4">
                Eat <span className="text-primary">Right</span> <br />
                Stay Bright
              </div>
              <div className="text-xs lg:text-xl text-black mb-4">
                Simple Diet Plans - That Work Wonders!
              </div>
              <WhatsAppButton classes="bg-primary text-white text-sm lg:text-base rounded-3xl px-2 py-1 lg:px-4 lg:py-2 space-x-2 items-center inline-flex" />
            </div>
            <Image
              src={sliderTwo}
              layout="fill"
              objectFit="cover"
              alt="Slide One"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-60 lg:h-128">
            <div className="absolute bottom-0 bg-gradient-to-r from-white/90 to-transparent p-6 lg:p-24 z-50 top-0 left-0 right-0">
              <div className="text-primary text-sm lg:text-xl mb-2 lg:mb-4 flex items-center lg:space-x-2">
                <Dash />
                <div>Health is in your hands</div>
              </div>
              <div className="text-xl lg:text-7xl font-title w-full mb-2 lg:mb-4">
                15000+ <span className="text-primary px-2">Satisfied</span>
                <br />
                Healthy clients
              </div>
              <div className="text-xs lg:text-xl text-black mb-4">
                Personal Nutritionist for every need
              </div>
              <WhatsAppButton classes="bg-primary text-white text-sm lg:text-base rounded-3xl px-2 py-1 lg:px-4 lg:py-2 space-x-2 items-center inline-flex" />
            </div>
            <Image
              src={sliderThree}
              layout="fill"
              objectFit="cover"
              alt="Slide One"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
