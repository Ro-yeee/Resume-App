import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope,faGlobe,faMapLocationDot } from "@fortawesome/free-solid-svg-icons"

function ResumePreview({data}) {
  return (
    <div className="ResumePreview">
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
            <div className="experienceContainer">
                <div className="experience">
                    <p>{data.experiences[0].position}</p>
                </div>
                <div className="experience">

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
                    <p>{data.info[7].text}</p>
                </div>
            </div>
            <div className="ColumnContainer">
                <div className="sec">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="logos" />
                    <p>{data.info[8].text}</p>
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
