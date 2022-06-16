import {
  faBookMedical,
  faClock,
  faPerson,
  faPersonDress,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Dash } from '..'
import whyChooseUs from '../../public/images/home/why-choose-us.jpeg'

const PricingAndPlans = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto">
        <div className="w-full lg:w-1/2 h-full">
          <div className="flex items-center capitalize text-primary font-semibold space-x-2 mb-4">
            <Dash border="border" hidden={false} />
            <div>You Are Only Going To Get Healthier Now!</div>
          </div>
          <div className="font-title text-4xl mb-4">
            Plans Available & Support
          </div>
          <div className="grid grid-flow-row gap-4">
            <div className="flex flex-col">
              <div className="font-title text-xl mb-4">Type of Plans</div>
              <ul className="list-disc list-inside">
                <li>One-Month Plan</li>
                <li>Two-Months Plan</li>
                <li>Three-Months Plan</li>
                <li>Six-Months Plan</li>
                <li>Twelve-Months Plan</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="font-title text-xl mb-4">
                Support During Your Plan:
              </div>
              <ul className="list-disc list-inside">
                <li>Dedicated Senior Nutritionist</li>
                <li>Daily Interaction</li>
                <li>Weekly Follow-Ups</li>
                <li>24×7 Access for Queries</li>
                <li>Food plans as per preferences</li>
              </ul>
            </div>
          </div>
          <div className="font-title text-4xl mt-8 mb-4">Prices & More</div>
          <div className="grid grid-flow-row gap-4">
            <div className="flex flex-col">
              <div className="font-title text-xl mb-4">Pricing:</div>
              <ul className="list-disc list-inside">
                <li>Prices as low as Rs.1730</li>
                <li>EMI payment options available</li>
                <li>
                  Our plans are goal-oriented and customized to your needs.
                </li>
                <li>Our plans are affordable and budget-friendly.</li>
                <li>
                  Discuss your needs with our nutrition expert now to know the
                  exact pricing for your plan.
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="font-title text-xl mb-4">How to Begin?</div>
              <div>
                We need a lot of details from your daily routine and nutrition.
                After collecting all the details, our nutrition expert will plan
                a customized diet for you and explain the details to you.
              </div>
            </div>
            <div className="flex font-title text-2xl">
              For that, let’s talk on +91-9899-1919-36 or chat with us.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-gray mt-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray">
            <div className="flex p-4">
              <div className="w-1/6">
                <FontAwesomeIcon
                  className="text-primary"
                  size="2x"
                  icon={faPerson}
                />
              </div>
              <div className="w-5/6">
                <div className="font-title text-2xl">674</div>
                <div>Successfully Managed PCOS Cases</div>
              </div>
            </div>
            <div className="flex p-4">
              <div className="w-1/6">
                <FontAwesomeIcon
                  className="text-primary"
                  size="2x"
                  icon={faHandHoldingHeart}
                />
              </div>
              <div className="w-5/6">
                <div className="font-title text-2xl">2700</div>
                <div>
                  Successfully Managed Hypertension, Thyroid & Diabetes Cases
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingAndPlans
