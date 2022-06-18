import {
  faBottleWater,
  faBowlFood,
  faHandHoldingHeart,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dash, Image } from '../../components'
import whyChooseUs from '../../public/images/home/why-choose-us.jpeg'

const WhyChoseUs = () => {
  return (
    <div className="w-full bg-white flex-col lg:flex-row flex pb-48">
      <div className="relative h-60 lg:h-auto w-full lg:w-1/2 shadow-custom-why-choose-us">
        <Image
          src={whyChooseUs}
          layout="fill"
          objectFit="cover"
          alt="Why Choose Us"
        />
      </div>

      <div className="w-full lg:w-2/3 bg-primary h-full text-white lg:pl-20 lg:pr-48 lg:py-16 relative lg:mt-16 lg:-mb-16 px-4 py-10">
        <div className="flex items-center capitalize font-semibold space-x-2 mb-4">
          <Dash border="border" hidden={false} />
          <div>what we do</div>
        </div>
        <div className="font-title text-4xl mb-4">Why Choose Us</div>
        <div className="font-normal mb-4">
          We handpick the best coaches and health experts from across the
          country to make sure you get the most personalized health person.
        </div>
        <div className="grid grid-flow-row gap-4 divide-y divide-gray">
          <div className="flex space-x-4 pt-4">
            <div>
              <FontAwesomeIcon
                size="3x"
                fixedWidth
                className="text-white"
                icon={faHandHoldingHeart}
              />
            </div>
            <div>
              <div className="font-title text-xl mb-4">
                Menu Options Made-To-Order
              </div>
              <ul className="list-disc list-inside">
                <li>Healthy diet plans for Indian lifestyle</li>
                <li>Plan suiting for work schedules</li>
                <li>Unique diet requirements</li>
                <li>Inclusion of your favourites</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <div>
              <FontAwesomeIcon
                size="3x"
                fixedWidth
                className="text-white"
                icon={faBowlFood}
              />
            </div>
            <div>
              <div className="font-title text-xl mb-4">
                Easy to make-n-follow diet plans
              </div>
              <ul className="list-disc list-inside">
                <li>Easy to make recipes</li>
                <li>No fancy-foods</li>
                <li>A plan made from your everyday kitchen ingredient</li>
                <li>Plans that don’t disturb your family meals</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <div>
              <FontAwesomeIcon
                size="3x"
                fixedWidth
                className="text-white"
                icon={faPersonChalkboard}
              />
            </div>
            <div>
              <div className="font-title text-xl mb-4">
                In-House Team of Nutrition Experts
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Our in-house nutrition expert has many years of experience
                </li>
                <li>Regular follow-ups</li>
                <li>Changing plans based on changing needs</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <div>
              <FontAwesomeIcon
                size="3x"
                fixedWidth
                className="text-white"
                icon={faBottleWater}
              />
            </div>
            <div>
              <div className="font-title text-xl mb-4">
                Nutrition Strategies Like No Other
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Our nutrition strategies are unique and specific to your body
                  needs
                </li>
                <li>
                  We encourage healthy lifestyle changes, which are lifelong
                </li>
                <li>
                  We include food options from your daily routine, and still,
                  achieve your goals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs
