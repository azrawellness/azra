import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhatsAppButton = ({
  classes = 'bg-primary text-white rounded-3xl px-4 py-2 space-x-2 items-center inline-flex',
  text = 'WhatsApp Senior Dietitian Now',
}) => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919899191936&text=Hello&app_absent=0"
      target="_blank"
      className={classes}
      rel="noreferrer"
    >
      <FontAwesomeIcon size="2x" icon={faWhatsapp} fixedWidth />
      <div>{text}</div>
    </a>
  )
}

export default WhatsAppButton
