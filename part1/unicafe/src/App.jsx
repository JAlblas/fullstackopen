import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}> {text} </button >)
}

const StatisticsLine = ({ text, value, percentage }) => {
  return (
    <tr><td>{text}:</td><td>{value} {percentage ? "%" : ""}</td></tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const percentageGood = (good / total) * 100;

  if (total === 0) return <p>No feedback given</p>

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <thead>
        </thead>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"total"} value={total} />
          <StatisticsLine text={"average"} value={average.toFixed(2)} percentage={false} />
          <StatisticsLine text={"positive"} value={percentageGood.toFixed(2)} percentage={true} />
        </tbody>
      </table>
    </div >
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"good"} handleClick={handleGood} />
      <Button text={"neutral"} handleClick={handleNeutral} />
      <Button text={"bad"} handleClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App