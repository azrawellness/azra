import { Calendly, Header, ServiceCard, Layout } from '../../components'
import weightManagement from '../../public/services/services_1.jpeg'
import healthyDietPlan from '../../public/services/services_2.jpeg'
import lactationDietPlan from '../../public/services/services_3.jpeg'
import corporateDietPlan from '../../public/services/services_4.jpeg'
import prenatalNutrition from '../../public/services/services_5.jpeg'
import therapeuticNutrition from '../../public/services/services_6.jpeg'
import sportsNutrition from '../../public/services/services_7.jpeg'
import kidsNutrition from '../../public/services/services_8.jpeg'
import nutriGlow from '../../public/services/services_9.jpeg'
import Head from 'next/head'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Azra</title>
        <meta name="description" content="Azra Website" />
      </Head>
      <div className="bg-gray text-black">
        <Header title="Services" />
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4 lg:px-0 mb-10">
            <ServiceCard
              imageSrc={weightManagement}
              title="Weight Management"
              description="Nutritional Coaching to normalize BMI healthily without any side effects"
              buttonLink="/services/weight-management"
            />
            <ServiceCard
              imageSrc={kidsNutrition}
              title="Kids Nutrition"
              description="Making custom nutrition for kids easy, interesting and free of tantrums."
              buttonLink="/services/kids-nutrition"
            />
            <ServiceCard
              imageSrc={lactationDietPlan}
              title="Lactation Diet Plan"
              description="A customized approach to nutrition that helps combat fertility"
              buttonLink="/services/lactation-diet-plan"
            />
            <ServiceCard
              imageSrc={corporateDietPlan}
              title="Corporate Diet Plan"
              description="Our Corporate Nutrition Workshops & Offerings are a great way to promote health and instil the habits of clean & mindful eating."
              buttonLink="/services/corporate-diet-plan"
            />
            <ServiceCard
              imageSrc={nutriGlow}
              title="Nutriglow for Bride and Groom-to-be"
              description="We have formulated a diet program that helps you achieve a lustrous hair & a super toned body, so that your big day becomes memorable to you for all the good reasons."
              buttonLink="/services/nutriglow-for-bride-groom-to-be"
            />
            <ServiceCard
              imageSrc={therapeuticNutrition}
              title="Therapeutic Nutrition"
              description="Retain your life and style while keeping your blood pressure under control."
              buttonLink="/services/threapeutic-nutrition"
            />
            <ServiceCard
              imageSrc={prenatalNutrition}
              title="Prenatal Nutrition"
              description="Fully customized diet as per lifestyle, medical history, and health goal."
              buttonLink="/services/prenatal-nutrition"
            />
            <ServiceCard
              imageSrc={sportsNutrition}
              title="Sports Nutrition"
              description="Our sports nutrition plan provide you with apt energy and strength that lets you take on the field with the most energetic manner, so that you continue to be a CHAMPION!"
              buttonLink="/services/sports-nutrition"
            />
            <ServiceCard
              imageSrc={healthyDietPlan}
              title="Healthy Diet Plan"
              description="A healthy eating plan gives your body the nutrients it needs every day while staying within your daily diet goal."
              buttonLink="/services/healthy-diet-plan"
            />
          </div>
        </div>
        <Calendly />
      </div>
    </>
  )
}

export default Services
