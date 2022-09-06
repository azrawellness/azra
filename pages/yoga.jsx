import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components'
import yogaImageOne from '../public/images/yoga1.webp'

const Yoga = () => {
  return (
    <>
      <Head>
        <title>Online Yoga Classes - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="text-black">
        <Header title="Online Yoga Classes" />
        <div className="container mx-auto py-16">
          <Image src={yogaImageOne} alt="Yoga" />
        </div>
      </div>
    </>
  )
}

export default Yoga
