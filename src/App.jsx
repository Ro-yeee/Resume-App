import './App.css'
import HeaderBox from './components/HeaderBox'
import PersonalDataForm from './components/PersonalDataForm'

function App() {
  return (
    <div className='App'>
      <div className='fields'>
        <HeaderBox />
        <PersonalDataForm />
       </div>
       <div className='resume'>
        
       </div>
    </div>
  )
}

export default App
