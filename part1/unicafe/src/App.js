import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}> {text} </button >)
}

const Statistics = () => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
    </div >
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"1"} handleClick={() => console.log('HIHI')}></Button>
      <Button text={"2"} handleClick={() => console.log('HIHI')}></Button>
      <Button text={"3"} handleClick={() => console.log('HIHI')}></Button>
      <Statistics></Statistics>
    </div>
  )
}

export default App