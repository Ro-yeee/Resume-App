import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"

function EducationForm({data,handleData}) {
  return (
    <div className="EducationForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faUserGraduate} className="iconNotClickable" />
            Education
        </h2>
        <input 
            type="text" 
            placeholder="School" 
            maxLength={66}
            value={data.info[4].text}
            onChange={handleData}/>
        <input 
            type="text" 
            placeholder="Degree" 
            maxLength={150}
            value={data.info[5].text}
            onChange={handleData}/>
    </div>
  )
}

export default EducationForm
