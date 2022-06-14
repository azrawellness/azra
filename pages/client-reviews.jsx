import React from 'react'
import { Header } from '../components'
import ClientReviews1 from '../public/images/client_reviews_1.jpeg'
import ClientReviews2 from '../public/images/client_reviews_2.jpeg'
import ClientReviews3 from '../public/images/client_reviews_3.jpeg'
import ClientReviews4 from '../public/images/client_reviews_4.jpeg'
import ClientReviews5 from '../public/images/client_reviews_5.jpeg'
import ClientReviews6 from '../public/images/client_reviews_6.jpeg'
import ClientReviews7 from '../public/images/client_reviews_7.jpeg'
import ClientReviews8 from '../public/images/client_reviews_8.jpeg'
import ClientReviews9 from '../public/images/client_reviews_9.jpeg'
import Image from 'next/image'

const ClientReviews = () => {
  return (
    <div className="bg-gray text-black">
      <Header title="Client Reviews" />
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4 lg:px-0">
          <Image src={ClientReviews1} width={500} height={500} alt="CR" />
          <Image src={ClientReviews1} width={500} height={500} alt="CR" />
          <Image src={ClientReviews1} width={500} height={500} alt="CR" />
        </div>
      </div>
    </div>
  )
}

export default ClientReviews
