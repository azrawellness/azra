import React from 'react'
import { Image, Dash } from '../../components'
import testimonialImage from '../../public/images/home/testimonials.jpg'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex space-x-20">
          <div className="relative w-1/2">
            <Image
              width={400}
              height={500}
              layout="responsive"
              objectFit="cover"
              src={testimonialImage}
              alt="Testimonials Image"
            />
          </div>
          <div className="w-1/2 pt-20 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Dash border="border" />
              <div className="font-semibold">Testimonial</div>
            </div>
            <div className="font-title text-4xl mb-4">
              What Our Clients Say!
            </div>
            <div>
              <div className="h-auto w-full">
                <Swiper
                  modules={[Pagination]}
                  loop={true}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  //   autoplay={{
                  //     delay: 5000,
                  //     disableOnInteraction: false,
                  //   }}
                  className="h-full lg:h-128 z-10"
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="bg-black/30 p-10 text-xl italic relative">
                      <blockquote className="relative">
                        Story of Manish Goyal from New Delhi / Professional in
                        UAE His Goals: Controlling Early Diabetes “My main goal
                        while taking the diet from Azra was weight loss and
                        controlling early diabetes. I have a family history of
                        diabetes for three generations. I did not want to start
                        any medication. The help I got from Azra’s team was
                        phenomenal. They planned meals as per my taste. I did
                        not struggle with any changes I wanted, because their
                        support team is very helpful. I have been monitoring my
                        fasting sugar since late 2019, which is now 135 from
                        earlier 220 average. I recommend Azra because their
                        approach is holistic. They dont just focus on the
                        problem but the source.”
                      </blockquote>
                    </div>
                  </SwiperSlide>
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
