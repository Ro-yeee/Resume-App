import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import "../componentStyles/PersonalData.css"

function PersonalDataForm() {
  return (
    <div className="PersonalDataForm">
      <h2 className="heading"> <FontAwesomeIcon icon={faAddressCard} className="iconNotClickable" /> Personal Data</h2>
      <div className="fullname">
        <input type="text" placeholder="First Name" maxLength={15} />
        <input type="text" placeholder="Last Name" maxLength={13}/>
      </div>
      <input type="text" placeholder="Niche: Front-End Developer" maxLength={26} />
      <label for="file" id="filepicture">Choose Picture</label>
      <input type="file" id="file" />
      <textarea placeholder="Tell something about yourself to stand out from other candidates.." maxLength={520} cols="30" rows="6"></textarea>
    </div>
  )
}

export default PersonalDataForm
