import { useState } from 'react'
import './App.css'
import HeaderBox from './components/HeaderBox'
import PersonalDataForm from './components/PersonalDataForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import ContactForm from './components/ContactForm'
import SkillsSection from './components/SkillsSection'

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
                                      },
                                      {
                                        name: "School",
                                        text: ""
                                      },
                                      {
                                        name: "Degree",
                                        text: ""
                                      },
                                      {
                                        name: "Address",
                                        text: ""
                                      },
                                      {
                                        name: "E-Mail",
                                        text: ""
                                      },
                                      {
                                        name: "Phone number",
                                        text: ""
                                      },
                                      {
                                        name: "Link to portfolio",
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

  const handleData = (e) =>{
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
            handleData={handleData}/>
        <EducationForm
            data={data}
            handleData={handleData}/>
        <SkillsSection/>
        <ContactForm
            data={data}
            handleData={handleData}/>
      </div>
      <div className='resume' id="resume">

      </div>
    </div>
  )
}

export default App
