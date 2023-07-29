import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faUserPen} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function HeaderBox({loadSampleCV,handlePrint}) {
  return (
    <div className="HeaderBox">
      <div className="topSection">
        <h1>CV Maker</h1>
        <div className="iconSection">
          <FontAwesomeIcon onClick={handlePrint} icon={faFilePdf} size="xl" className="icon" />
          <FontAwesomeIcon onClick={loadSampleCV} icon={faUserPen} size="xl" className="icon" />
        </div>
      </div>
      <div className="bottomSection">
        <span>Created By</span>
        <a href="https://github.com/Ro-yeee" className="link" target="_balnk">
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <span>Roy Joseph</span>
        </a>
      </div>
    </div>
  )
}

export default HeaderBox
