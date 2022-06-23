import { Image } from '../components'
import Link from 'next/link'

const ServiceCard = ({ imageSrc, title, description, buttonLink }) => {
  return (
    <div className="group">
      <div className="relative rounded">
        <div className="relative rounded flip-front group-hover:scale-x-0 scale-x-100 transition duration-200">
          <Image
            src={imageSrc}
            layout="responsive"
            imageClass="rounded"
            width={1280}
            height={853}
            alt={title}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full group-hover:scale-x-100 scale-x-0 transition duration-300 ease-in-out">
          <div className="flex flex-col space-y-2 bg-primary-light rounded items-center justify-center w-full h-full">
            <div className="text-3xl font-title text-center w-full max-w-sm">
              {title}
            </div>
            <div className="text-center text-sm max-w-xs w-full">
              {description}
            </div>
            <Link href={buttonLink}>
              <a className="cursor-pointer border-2 px-4 py-2 border-black rounded-3xl hover:bg-black hover:text-white transition">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
