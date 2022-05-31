import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './json/users.json'
function App() {
 
 const arrayColors= [
  '#2E92AE','#D0C606','#B92146','#A04E38'
 ]

  const createNumberRandom = Array=>{
    return Math.floor (Math.random()* Array.length)
  }

  const getElementRandom = array=>{
    const i = createNumberRandom (array)
    return array [i]
  }



  const [userRandom, setUserRandom] = useState(getElementRandom(users))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))
  
  const clickButton = () =>{
    setUserRandom(getElementRandom(users))
    setColorRandom (getElementRandom(arrayColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card
      userRandom={userRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
