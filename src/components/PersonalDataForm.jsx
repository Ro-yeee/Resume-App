import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

function PersonalDataForm({data,pictureUpload,handleData}) {
  let filename = null
  return (
    <div className="PersonalDataForm">
        <h2 className="heading"> 
            <FontAwesomeIcon icon={faAddressCard} className="iconNotClickable" />
            Personal Data
        </h2>
        <div className="fullname">
            <input 
                type="text" 
                placeholder="First Name" 
                maxLength={15}
                value={data.info[0].text}
                onChange={handleData}/>
            <input 
                type="text" 
                placeholder="Last Name" 
                maxLength={13} 
                value={data.info[1].text}
                onChange={handleData}/>
        </div>
        <input 
            type="text" 
            placeholder="Niche: Front-End Developer" 
            maxLength={26}
            value={data.info[2].text}
            onChange={handleData}/>
        <label 
            htmlFor="file" 
            id="filepicture">
            {data.fileName ? data.fileName : "Choose Picture"}
        </label>
        <input 
            type="file" 
            id="file" 
            accept="image/*" 
            onChange={pictureUpload} />
        <textarea 
            placeholder="Tell something about yourself to stand out from other candidates..." 
            maxLength={520} 
            cols="30" 
            rows="6"
            value={data.info[3].text}
            onChange={handleData}/>
    </div>
  )
}

export default PersonalDataForm
