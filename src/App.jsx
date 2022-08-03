import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Chalkboard from './components/Chalkboard'


function App() {

  const [sentence, writeSentence] = useState('')

  const addLine = () => {
    writeSentence("I will never mutate state or props directly")
  }


  return (
    <div className="App">
      <h1>Welcome to Detention</h1>
      <h3>Click the Eraser to start writting</h3>
      <Button handleClick={addLine} />
      <ul>
        <Chalkboard list={sentence} />
      </ul>
    </div>

  )
}

export default App
