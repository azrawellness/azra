import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from '../../components'
import Link from 'next/link'
import moment from 'moment'

const PostSlider = ({ posts, classId = 'post-slider' }) => {
  return (
    <div className="h-96 w-full flex lg:space-x-4 items-center px-4 lg:px-0 my-10">
      <div
        className={`prev-${classId} cursor-pointer hidden lg:flex hover:scale-125 transition text-black`}
      >
        <FontAwesomeIcon size="3x" icon={faChevronCircleLeft} />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{
          prevEl: `.prev-${classId}`,
          nextEl: `.next-${classId}`,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <div className="px-6">
          {posts &&
            posts.map((post, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="bg-white shadow h-80 rounded grid grid-cols-1">
                  <div className="col-span-1 relative h-36 w-full">
                    <Image
                      src={post.featuredImage.url}
                      layout="fill"
                      imageClass="rounded-t"
                      objectFit="cover"
                      alt={post.title}
                    />
                  </div>
                  <div className="col-span-2 p-4">
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                      <a className="font-primary text-lg hover:text-primary cursor-pointer transition hover:underline">
                        {post.title}
                      </a>
                    </Link>
                    <div className="flex space-x-2 text-sm mt-2 mb-4">
                      <div className="flex space-x-1 items-center">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          fixedWidth
                          className="text-primary"
                        />
                        <span>
                          {moment
                            .unix(post.publishedDate.seconds)
                            .format('Do MMM YYYY')}
                        </span>
                      </div>
                      <div>&bull;</div>
                      <div className="flex space-x-1 items-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          fixedWidth
                          className="text-primary"
                        />
                        <span>{post.author.displayName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div
        className={`next-${classId} cursor-pointer hidden lg:flex hover:scale-125 transition text-black`}
      >
        <FontAwesomeIcon size="3x" icon={faChevronCircleRight} />
      </div>
    </div>
  )
}

export default PostSlider
