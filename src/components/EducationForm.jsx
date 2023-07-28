import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"

function EducationForm() {
  return (
    <div className="EducationForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faUserGraduate} className="iconNotClickable" />
            Education
        </h2>
        <input 
            type="text" 
            placeholder="School" 
            maxLength={66}/>
        <input 
            type="text" 
            placeholder="Degree" 
            maxLength={150}/>
    </div>
  )
}

export default EducationForm
