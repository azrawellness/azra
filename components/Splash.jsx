import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Splash = () => {
  return (
    <div className="h-96 w-full flex justify-center items-center">
      <FontAwesomeIcon icon={faGear} spin size="7x" />
    </div>
  )
}

export default Splash
