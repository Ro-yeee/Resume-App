import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGear,faPlus } from "@fortawesome/free-solid-svg-icons"

function SkillsSection() {
  return (
    <div className="SkillsSection">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faUserGear} className="iconNotClickable" />
            Skills
        </h2>
        <div className="skillRow">
            <input 
                type="text" 
                placeholder="Language or Techology"/>
            <>
            </>
        </div>
        <button className="AddBtn">
            <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
        </button>
    </div>
  )
}

export default SkillsSection
