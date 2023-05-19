import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}> {text} </button >)
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) return <p>No feedback given</p>

  const average = (good - bad) / total;
  const percentageGood = good / total;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {average}</p>
      <p>Positive: {percentageGood}%</p>
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
      <Button text={"Good"} handleClick={() => setGood(good + 1)}></Button>
      <Button text={"Neutral"} handleClick={() => setNeutral(neutral + 1)}></Button>
      <Button text={"Bad"} handleClick={() => setBad(bad + 1)}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div >
  )
}

export default App