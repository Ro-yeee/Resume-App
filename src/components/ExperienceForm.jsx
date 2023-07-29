import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench,faPlus } from "@fortawesome/free-solid-svg-icons"

function ExperienceForm() {
  return (
    <div className="ExperienceForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faScrewdriverWrench} className="iconNotClickable" />
            Work Experience
        </h2>
        <input 
            type="text" 
            placeholder="Position" 
            maxLength={38}/>
         <input 
            type="text" 
            placeholder="Company" 
            maxLength={30}/>
         <input 
            type="text" 
            placeholder="Start date of employment" 
            maxLength={12}/>
         <input 
            type="text" 
            placeholder="End date of employment" 
            maxLength={12}/>
          <textarea 
            placeholder="Your main occupation, daily tasks and work field" 
            maxLength={400} 
            cols="30" 
            rows="6"/>
          <button className="Btn">
                <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
          </button>    
    </div>
  )
}

export default ExperienceForm
