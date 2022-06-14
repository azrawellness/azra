import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({ imageSrc, title, description, buttonLink }) => {
  return (
    <div className="group">
      <div className="relative">
        <div className="relative flip-front group-hover:scale-x-0 scale-x-100 transition duration-200">
          <Image src={imageSrc} alt="CR" />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full group-hover:scale-x-100 scale-x-0 transition duration-200">
          <div className="flex flex-col space-y-2 bg-primary  items-center justify-center w-full h-full">
            <div className="text-3xl font-title">{title}</div>
            <div className="text-center max-w-xs w-full">{description}</div>
            <Link href={buttonLink}>
              <div className="cursor-pointer border-2 px-4 py-2 border-black rounded-3xl">
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
