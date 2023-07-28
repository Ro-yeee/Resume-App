import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

function ExperienceForm() {
  return (
    <div className="ExperienceForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faScrewdriverWrench} className="iconNotClickable" />
            Work Experience
        </h2>
    </div>
  )
}

export default ExperienceForm
