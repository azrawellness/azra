import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const Services = ({ services }) => {
  return (
    <div className="h-full w-full flex lg:space-x-4 items-center px-4 lg:px-0">
      <div className="next hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleLeft} />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="h-full z-10 flex items-center"
        spaceBetween={30}
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
            services.map((service) => (
              <SwiperSlide key={service.id} className="relative mt-20">
                {/* <FontAwesomeIcon
                  icon={service.icon}
                  size="2x"
                  fixedWidth
                  className="bg-primary text-white px-3 py-4 rounded-full z-50 absolute -top-8 right-8"
                /> */}
                <div className="bg-white  rounded p-8 h-full">
                  <div className="font-title text-2xl mb-4">
                    {service.title}
                  </div>
                  <div className="mb-4 h-32">{service.description}</div>
                  <Link href={service.link} passHref>
                    <div className="inline-flex cursor-pointer px-2 py-1 bg-primary rounded shadow hover:-translate-y-2 transition">
                      Read More
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div className="next hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleRight} />
      </div>
    </div>
  )
}

export default Services
