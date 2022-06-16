import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const Services = ({ images }) => {
  return (
    <div className="h-full w-full flex lg:space-x-4 items-center px-4 lg:px-0">
      <div className="prev-image-slider hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleLeft} />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{
          prevEl: '.prev-image-slider',
          nextEl: '.next-image-slider',
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
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <Image src={image.link} priority alt={`Client ${index}`} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div className="next-image-slider hidden lg:flex hover:scale-125 transition text-black">
        <FontAwesomeIcon size="3x" icon={faChevronCircleRight} />
      </div>
    </div>
  )
}

export default Services
