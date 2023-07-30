import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrush } from "@fortawesome/free-solid-svg-icons"

function Gradient({data,getColor1,getColor2}) {
  return (
    <div className="Gradient">
         <h2 className="heading"> 
            <FontAwesomeIcon icon={faBrush} className="iconNotClickable" />
            Gradient
        </h2>
        <div className="colorBox">
            <label 
                htmlFor="color1" 
                id="colorPicker1"
                style={{background:`${data.color1}`}}>
                <input 
                    id="color1"
                    type="color" 
                    className="color"
                    onChange={getColor1}
                    value={data.color1}/>
            </label>
            <label 
                htmlFor="color2" 
                id="colorPicker2"
                style={{background:`${data.color2}`}}>
                <input 
                    id="color2"
                    type="color" 
                    className="color"
                    onChange={getColor2}
                    value={data.color2}/>
            </label>
        </div>
    </div>
  )
}

export default Gradient
