import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const TopNavbar = () => {
  return (
    <div className="bg-secondary h-12 flex items-center justify-center text-gray">
      <div className="container mx-auto flex justify-between">
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="text-primary mr-2" />
          India, USA, UK, Canada, UAE, Qatar, Saudi Arabia, New Zealand,
          Australia, South Africa, Kenya, Singapore
        </div>
        <div className="flex justify-between divide-x divide-gray">
          <div className="px-2">
            <a href="mailto:info@azra.in">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-primary mr-2"
              />
              info@azra.in
            </a>
          </div>
          <div className="flex px-2 space-x-2 text-primary">
            <a href="/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
