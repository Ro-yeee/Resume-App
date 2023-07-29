import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench,faPlus,faTrashCan } from "@fortawesome/free-solid-svg-icons"

function ExperienceForm({data,addExperience,removeExperience,handleExperience}) {
  return (
    <div className="ExperienceForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faScrewdriverWrench} className="iconNotClickable" />
            Work Experience
        </h2>
        {
          data.experiences.map((experience,index) =>(
            <div className="experienceRow" key={experience.id}>
              {data.experiences.length > 1  &&
                <div className="subHeading">
                    <h3>Experience {index+1}</h3>
                    <FontAwesomeIcon onClick={() => removeExperience(experience.id)} icon={faTrashCan} size="xl" className="icon"/>
                </div>
                }
                <input 
                    type="text" 
                    placeholder="Position" 
                    maxLength={38}
                    name="position"
                    value={experience.position}
                    onChange={(e)=>handleExperience(e,experience.id)}/>
                <input 
                    type="text" 
                    placeholder="Company" 
                    maxLength={30}
                    name="company"
                    value={experience.company}
                    onChange={(e)=>handleExperience(e,experience.id)}/>
                <input 
                    type="text" 
                    placeholder="Start date of employment" 
                    maxLength={12}
                    name="startDate"
                    value={experience.startDate}
                    onChange={(e)=>handleExperience(e,experience.id)}/>
                <input 
                    type="text" 
                    placeholder="End date of employment" 
                    maxLength={12}
                    name="endDate"
                    value={experience.endDate}
                    onChange={(e)=>handleExperience(e,experience.id)}/>
                <textarea 
                    placeholder="Your main occupation, daily tasks and work field" 
                    maxLength={400} 
                    cols="30" 
                    rows="6"
                    name="description"
                    value={experience.description}
                    onChange={(e)=>handleExperience(e,experience.id)}/>
            </div>
          ))
        }
        {
          data.experiences.length < 2 &&
          <button className="Btn" onClick={addExperience} >
                <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
          </button>   
        } 
    </div>
  )
}

export default ExperienceForm
