import Head from 'next/head'
import Image from 'next/image'
import { Header, WhatsAppButton } from '../components'
import yogaImageOne from '../public/images/yoga/yoga-image-one.jpg'
import yogaImageTwo from '../public/images/yoga/yoga-image-two.jpg'
import yogaImageThree from '../public/images/yoga/azra-yoga-infographic.png'

const Yoga = () => {
  const steps = [
    {
      title: 'Step 1 - Get Assessed',
      body: "Meet with your dedicated trainer for a FREE demo session where they'll assess your physical, mental, & spiritual health & explain how AZRAH can help you!",
    },
    {
      title: 'Step 2 - Build Your Plan',
      body: 'Once we have your details, our team of multi-disciplinary wellness experts will design a tailored wellness program to suit your lifestyle & goals',
    },
    {
      title: 'Step 3 - Do The Work',
      body: 'Complete your private meditation and yoga video training sessions live with our highly qualified coaches and stay on track with hands-on coaching and diet support just for you.',
    },
    {
      title: 'Step 4 - Change Your Life',
      body: 'Monitor your progress and achieve your health and wellness goals faster with detailed customised plans and one-on-one chat support and accountability.',
    },
  ]

  return (
    <>
      <Head>
        <title>Online Yoga Classes - Azrah</title>
        <meta name="description" content="Azrah Website" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-tag" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <div className="text-black">
        <Header title="Online Yoga Classes" />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative">
            <Image src={yogaImageOne} layout="responsive" alt="Yoga" />
          </div>
          <div className="p-4 lg:p-24 w-full lg:w-1/2">
            <div className="text-yoga text-4xl lg:text-5xl font-black font-title lg:max-w-4xl mx-auto">
              Your Path To Health & Happiness Starts Here
            </div>
            <div className="lg:max-w-5xl mx-auto mt-4 lg:mt-6 font-primary lg:text-xl">
              Health is everything in life. When your mind, body, and spirit are
              in good shape, you&apos;re happier, more productive, and more
              satisfied with life. By partnering with our team of wellness
              experts, you put your health first - and so do we.
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="p-4 lg:p-24 w-full lg:w-1/2">
            <div className="text-yoga text-4xl lg:text-5xl font-black font-title lg:max-w-4xl mx-auto">
              Only The Best For Your Mind, Body & Soul
            </div>
            <div className="lg:max-w-5xl mx-auto mt-4 lg:mt-6 font-primary lg:text-xl">
              We&apos;re a specialist team passionate about adding healthy years
              to the lives of others. As a premium wellness service, we only
              select top trainers who we trust to provide you with an unbeatable
              experience & results.
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image src={yogaImageTwo} layout="responsive" alt="Yoga" />
          </div>
        </div>
        <div className="bg-yoga">
          <div className="container mx-auto lg:max-w-5xl py-10 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 lg:px-0 lg:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray/10 shadow-lg rounded p-4 pb-16"
                >
                  <div className="text-white text-3xl lg:text-4xl font-black font-title border-b-4 border-white border-solid pb-2 w-fit">
                    {step.title}
                  </div>
                  <div className="mt-4 lg:mt-6 text-gray font-primary text-lg">
                    {step.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-24">
          <div className="text-yoga text-4xl lg:text-5xl font-black font-title lg:text-center lg:max-w-4xl lg:mx-auto">
            What it Cost To Change Your Life?
          </div>
          <div className="lg:max-w-5xl mx-auto mt-4 lg:mt-6 font-primary lg:text-center lg:text-xl">
            Transforming your mental, physical and spiritual health takes time
            which is why we only offer customised monthly, quarterly,
            half-yearly, and yearly options.
          </div>
        </div>
        <div className="bg-yoga">
          <div className="max-w-md mx-auto relative">
            <Image src={yogaImageThree} layout="responsive" alt="Yoga" />
          </div>
        </div>
        <div className="text-yoga text-4xl lg:text-6xl font-black font-title lg:text-center lg:max-w-4xl lg:mx-auto px-4 lg:px-0 pt-10 lg:pt-24">
          A Happier, Healthier{' '}
          <span className="text-pink px-1">&apos;You&apos;</span>
          Awaits
        </div>
        <div className="lg:max-w-5xl lg:mx-auto mt-4 lg:mt-6 font-primary lg:text-center px-4 lg:px-0 lg:text-xl pb-6">
          Book Free Consultation for Assessment Now!
        </div>
        <div className="flex justify-center pb-24">
          <WhatsAppButton />
        </div>
      </div>
    </>
  )
}

export default Yoga
