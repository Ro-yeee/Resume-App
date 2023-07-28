import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

function ContactForm({data,handleData}) {
  return (
    <div className="ContactForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faAddressBook} className="iconNotClickable" />
            Contacts
        </h2>
        <input 
            type="text" 
            placeholder="Address" 
            maxLength={80}
            value={data.info[6].text}
            onChange={handleData}/>
        <div className="contactMe">
            <input 
                type="email" 
                placeholder="E-Mail" 
                maxLength={80}
                value={data.info[7].text}
                onChange={handleData}/>
            <input 
                type="tel" 
                placeholder="Phone number" 
                maxLength={15}
                value={data.info[8].text}
                onChange={handleData}/>
        </div>
        <input 
            type="link" 
            placeholder="Link to portfolio" 
            maxLength={80}
            value={data.info[9].text}
            onChange={handleData}/>     
    </div>
  )
}

export default ContactForm
