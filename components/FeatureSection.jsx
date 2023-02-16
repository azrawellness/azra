import { FeatureCard } from '../components'
import {
  faHandHoldingHeart,
  faBottleWater,
  faBowlFood,
} from '@fortawesome/free-solid-svg-icons'

const FeatureSection = () => {
  return (
    <div className=" mt-4 mb-[10rem] lg:mt-0 lg:h-60 mx-auto">
      <div className=" lg:z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-4 lg:gap-0 lg:px-28">
          <FeatureCard
            title="Customized Diet Plans"
            icon={faHandHoldingHeart}
            description="We treat you as an individual. You are not a blood-group, body-type, or body-shape for us. You are you, and you are awesome. Your diet plan with us will be unique, customized, and specifically made for your needs."
          />
          <FeatureCard
            title="Personal Online Nutritionist"
            icon={faBottleWater}
            description="Food has a special ability to bring people together. Our
                    dietitians and nutrition experts have a minimum of 5 years of
                    experience. They are medically trained to handle complex body
                    types. Wherever you go, wherever you are we make sure that
                    your diet plan doesn’t get hampered ever.."
          />
          <FeatureCard
            title="Targeting Goals"
            icon={faBowlFood}
            description="Your goal can be weight-loss, weight-gain, getting fit for
                  your wedding, tackling PCOS, blood pressure, gastric issues,
                  thyroid, diabetes, pregnancy symptoms, or anything else. Our
                  nutritionists are capable to tackle your goal. We are ready
                  for your goal!"
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
