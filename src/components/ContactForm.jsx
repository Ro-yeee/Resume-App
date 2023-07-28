import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

function ContactForm() {
  return (
    <div className="ContactForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faAddressBook} className="iconNotClickable" />
            Contacts
        </h2>
        <input 
            type="text" 
            placeholder="Address" 
            maxLength={80}/>
        <div className="contactMe">
            <input 
                type="email" 
                placeholder="E-Mail" 
                maxLength={80}/>
            <input 
                type="tel" 
                placeholder="Phone number" 
                maxLength={15}/>
        </div>
        <input 
            type="link" 
            placeholder="Link to portfolio" 
            maxLength={80}/>     
    </div>
  )
}

export default ContactForm
