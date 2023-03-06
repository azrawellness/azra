import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AboutAzra,
  FeatureSection,
  Image,
  ImageSlider,
  PostsSection,
  PricingAndPlans,
  Services,
  SwiperSection,
  Testimonials,
  WhatsAppButton,
  WhyChoseUs,
} from "../components";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormNoBg from "../components/EnquiryFormNoBG";
import { Metrics } from "../components/home/Metrics";
import { WhatWeDo } from "../components/home/WhatWeDo";
import PopupForm from "../components/PopupForm";
import ctaImage from "../public/images/home/home-cta.jpeg";
import {
  featuredClients,
  featuredOurResults,
  whatWeOffer,
} from "../utils/data";
import { useState, useEffect, useRef } from "react";
import { HomeTongles } from "../components/home/HomeTongles";
const Home = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      // if (setShow) {
      //   document.body.style.overflow = "hidden";
      // }
      const y = window.pageYOffset;
      ref.current.style.top = y + 40 + "px";
    }, 35000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {" "}
      <div className={`h-full bg-white w-full ${show ? `indexContainer` : ``}`}>
        {/* Main Slider Section */}
        <SwiperSection />
        {/* About Azra Section */}
        <AboutAzra />
        {/* Feature Section */}
        {/*Metrics*/}
        <Metrics />
        {/* What do we offer section */}
        <div className="bg-gray ">
          <div className="container mx-auto pt-[1rem] ">
            <div className="text-center font-title text-5xl mt-[3rem] mb-4">
              What Do We Offer?
            </div>
            <div className="text-dark-gray text-center w-full max-w-xl mx-auto text-lg mb-10">
              We understand that you are special – and your body requirements
              are unique. We work to design unique diet plans specifically for:
            </div>
            {/* <Services services={whatWeOffer} /> */} <FeatureSection />
            {/* <WhatWeDo services={whatWeOffer}></WhatWeDo> */}
          </div>
        </div>
        {/* Real Clients, Real Transformations Section */}
        <div className="bg-white ">
          <div className="container mx-auto">
            <div className="text-center font-title text-4xl mb-16">
              Real Clients, Real Transformations
            </div>
            <ImageSlider
              lazyBoundary="500px"
              classId="real-clients"
              images={featuredClients}
            />
          </div>
        </div>
        {/* Why Choose Us Section */}
        <WhyChoseUs />

        {/* <div className="w-full flex justify-center ">
     <EnquiryForm />
   </div> */}

        {/* Our Results Speak - When They can, so can You ! */}
        <div className="bg-gray pt-20">
          <div className="container mx-auto">
            <div className="text-center font-title text-4xl mb-16">
              Our Results Speak - When They can, so can You !
            </div>
            <ImageSlider
              lazyBoundary="800px"
              classId="our-results"
              images={featuredOurResults}
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA section */}
        {/* <div className="relative h-[80vh] md:h-[100vh] lg:h-[120vh] w-full">
     <div className="absolute z-30 top-10 lg:top-28 left-5 lg:left-28">
       <FontAwesomeIcon
         icon={faLeaf}
         size="5x"
         className="text-primary mb-4 hidden lg:flex"
       />
       <div className="text-2xl lg:text-6xl font-title w-full max-w-2xl mb-4">
         We Are Excited To Make You Healthier
       </div>
       <div className="mb-4">
         WhatsApp us or Chat with us - We respond immediately!
         <EnquiryFormNoBg />
       </div> */}
        {/* <WhatsAppButton /> */}
        {/* </div>
     <Image
       src={ctaImage}
       layout="fill"
       objectFit="cover"
       alt="We are excited to make you healthier"
     />
   </div> */}
        {/* Pricing and Plans */}
        <PricingAndPlans />

        {/*Popupform*/}
      </div>
      <PopupForm refPopup={ref} setShow={setShow} />
      <HomeTongles />
    </div>
  );
};

export default Home;
