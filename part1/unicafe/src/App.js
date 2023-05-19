import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}> {text} </button >)
}

const StatisticsLine = ({ text, value, percentage }) => {
  return (
    <p>{text}: {value}{percentage ? "%" : ""}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) return <p>No feedback given</p>

  const average = (good - bad) / total;
  const percentageGood = good / total;

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsLine text="Good" value={good}></StatisticsLine>
      <StatisticsLine text="Neutral" value={neutral}></StatisticsLine>
      <StatisticsLine text="Bad" value={bad}></StatisticsLine>
      <StatisticsLine text="Total" value={good + neutral + bad}></StatisticsLine>
      <StatisticsLine text="Average" value={average}></StatisticsLine>
      <StatisticsLine text="Positive" value={percentageGood} percentage={true}></StatisticsLine>
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