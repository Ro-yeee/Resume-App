import { useState } from 'react'
import './App.css'
import HeaderBox from './components/HeaderBox'
import PersonalDataForm from './components/PersonalDataForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import ContactForm from './components/ContactForm'

function App() {
  const [data,setData] = useState({fileName: "",
                                   fileSrc: "",
                                   info:[
                                      {
                                        name: "First Name",
                                        text: ""
                                      },
                                      {
                                        name: "Last Name",
                                        text: ""
                                      },
                                      {
                                        name: "Niche: Front-End Developer",
                                        text: ""
                                      },
                                      {
                                        name: "Tell something about yourself to stand out from other candidates...",
                                        text: ""
                                      }
                                    ]
                                  })
  
  const pictureUpload = (e) =>{
    setData({...data,
            fileName:e.target.files[0].name,
            fileSrc: URL.createObjectURL(e.target.files[0])
          })
  }

  const handlePersonalData = (e) =>{
    setData({...data,
      info:data.info.map(element => {
          if(element.name === e.target.placeholder){
            element.text = e.target.value
          }
            return element
        })
    })
  }
  
  return (
    <div className='App'>
      <div className='fields'>
        <HeaderBox/>
        <PersonalDataForm
            data={data}
            pictureUpload={pictureUpload}
            handlePersonalData={handlePersonalData}/>
        <EducationForm/>
        <ContactForm/>
      </div>
      <div className='resume' id="resume">

      </div>
    </div>
  )
}

export default App
