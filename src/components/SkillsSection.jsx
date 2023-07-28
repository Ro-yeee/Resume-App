import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGear,faPlus,faTrashCan } from "@fortawesome/free-solid-svg-icons"

function SkillsSection({data,addSkill,removeSkill}) {
  return (
    <div className="SkillsSection">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faUserGear} className="iconNotClickable" />
            Skills
        </h2>
        {
            data.skills.map((skill,index) =>(
                <div className="skillRow" key={skill.id}>
                    <input 
                        type="text" 
                        placeholder="Language or Techology"/>
                    {data.skills.length > 1 && <FontAwesomeIcon onClick={() => removeSkill(skill.id)} icon={faTrashCan} size="xl" className="icon"/> }
                </div> 
                ))
        }
        {
            data.skills.length < 12 &&
            <button className="Btn" onClick={addSkill}>
                <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
            </button>
         }  
    </div>
  )
}

export default SkillsSection
