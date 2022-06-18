import { useState } from 'react'
import NextImage from 'next/image'

const Image = ({ src, alt, imageClass, ...props }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      {...props}
      className={`bg-gray-400 transition duration-1000 z-0 ${imageClass} ${
        isReady ? 'scale-100 bg-white blur-0' : 'scale-120 blur-2xl'
      }`}
      onLoadingComplete={onLoadCallback}
      priority
    />
  )
}

export default Image
