import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow py-10 px-8">
      <div className="flex justify-center mb-4">
        <FontAwesomeIcon size="3x" icon={icon} className="text-primary" />
      </div>
      <div className="text-center font-title text-2xl mb-4">{title}</div>
      <div className="text-center">{description}</div>
    </div>
  )
}

export default FeatureCard
