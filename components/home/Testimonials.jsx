import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Dash, Image, Splash } from '../../components'
import testimonialImage from '../../public/images/home/testimonials.jpg'
import { TESTIMONIALS } from '../../utils/constants'
import { db } from '../../firebase-config.js'

const Testimonials = () => {
  const [loading, setLoading] = useState(false)
  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = async () => {
    setLoading(true)
    const testimonialsRef = collection(db, TESTIMONIALS)
    const q = query(testimonialsRef)
    let data = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    setTestimonials(data)
    setLoading(false)
  }

  useEffect(() => {
    getTestimonials()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading ? (
    <Splash />
  ) : (
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
                      <div className="bg-black/30 p-6 lg:p-10 relative h-full">
                        <blockquote className="relative mb-10 text-xl italic">
                          {testimonial.description}
                        </blockquote>
                        <div className="flex items-center space-x-4">
                          <div className="relative w-10 h-10 lg:h-20 lg:w-20 rounded-full border-2 border-white">
                            <Image
                              layout="fill"
                              imageClass="rounded-full border-2 border-white"
                              objectFit="cover"
                              src={testimonial?.featuredImage?.url}
                              alt={testimonial?.featuredImage?.name}
                            />
                          </div>
                          <div>
                            <div className="text-xl font-title">
                              {testimonial.name}
                            </div>
                            <div className="text-xs">
                              {testimonial.jobTitle}
                            </div>
                          </div>
                        </div>
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
