import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope,faGlobe,faMapLocationDot } from "@fortawesome/free-solid-svg-icons"

function ResumePreview({data,reference}) {
  return (
    <div className="ResumePreview" ref={reference}>
        <div className="ResumeTop">
            <div className="Header">
                <div className="HeadTag">
                    <h1>{data.info[0].text} {data.info[1].text}</h1>
                    <span>
                        {data.info[2].text}
                    </span>
                </div>
                <div className="imgContainer" style={data.fileSrc ? {backgroundColor:"none"} : {background:"black"}} >
                  <img src={data.fileSrc} alt={data.filename} />
                </div>
            </div>
            <p>{data.info[3].text}</p>
        </div>
        <div className="ResumeMiddle">
            <h1>Experience</h1>
            <div className="experiences">
                {
                    data.experiences.map(element =>(
                        <div className="experienceContainer" key={element.id} style={data.experiences.length > 1 ? {maxWidth: "320px"}: null}>
                            <h3>{element.position}</h3>
                            <p>{element.company} | {element.startDate} - {element.endDate}</p>
                            <p className="workDescription">{element.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="educationSkills">
                <div className="educationContainer">
                    <h1>Education</h1>
                    <h3>{data.info[4].text}</h3>
                    <p>{data.info[5].text}</p>
                </div>
                <div className="skillsContainer">
                    <h1>Skills</h1>
                    <div className="skillGrid">
                        {
                            data.skills.map(skill => <p className="list" key={skill.id}>{skill.text}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="BottomSection">
            <div className="ColumnContainer">
                <div className="sec">
                    <FontAwesomeIcon icon={faMapLocationDot} size="xl" className="logos" />
                    <p>{data.info[6].text}</p>
                </div>
                <div className="sec">
                    <FontAwesomeIcon icon={faPhone} size="xl" className="logos" />
                    <p>{data.info[8].text}</p>
                </div>
            </div>
            <div className="ColumnContainer">
                <div className="sec">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="logos" />
                    <p>{data.info[7].text}</p>
                </div>
                <div className="sec">
                    <FontAwesomeIcon icon={faGlobe} size="xl" className="logos" />
                    <p>{data.info[9].text}</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ResumePreview
