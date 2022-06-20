import React from 'react'
import { Image, Dash } from '../../components'
import testimonialImage from '../../public/images/home/testimonials.jpg'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = ({ testimonials }) => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 lg:px-0 py-10 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:space-x-20">
          <div className="relative w-full lg:w-1/2">
            <Image
              width={400}
              height={500}
              layout="responsive"
              objectFit="cover"
              src={testimonialImage}
              alt="Testimonials Image"
            />
          </div>
          <div className="w-full lg:w-1/2 pt-20 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Dash border="border" hidden={false} />
              <div className="font-semibold">Testimonial</div>
            </div>
            <div className="font-title text-4xl mb-4">
              What Our Clients Say!
            </div>
            <div>
              <div className="h-auto w-full">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="h-full lg:h-128 z-10"
                  slidesPerView={1}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-black/30 p-10 text-xl italic relative">
                        <blockquote className="relative">
                          {testimonial.description}
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
