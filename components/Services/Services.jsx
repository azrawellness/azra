import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import EnquiryForm from '../EnquiryForm'

const Services = ({ services }) => {
  return (
    <div className="h-96 w-full flex lg:space-x-4 items-center px-4 lg:px-0">
      <div className="prev-services hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleLeft} />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{
          prevEl: '.prev-services',
          nextEl: '.next-services',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="h-full z-10 flex items-center"
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <div className="px-6">
          {services &&
            services.map((service, index) => (
              <SwiperSlide key={index} className="relative mt-20">
                <FontAwesomeIcon
                  icon={service.icon}
                  size="2x"
                  fixedWidth
                  className="bg-primary shadow text-white px-3 py-4 rounded-full z-50 absolute -top-8 right-8"
                />
                <div className="bg-white h-72 shadow rounded p-8">
                  <div className="font-title text-2xl mb-4">
                    {service.title}
                  </div>
                  <div className="h-36">{service.description}</div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div className="next-services hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleRight} />
      </div>
    </div>
  )
}

export default Services
