import { useState } from 'react'

const Button = () => {

}

const StatisticsLine = ({ text, statistic }) => {
  return (
    <p>{text}: {statistic}</p>
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
      <StatisticsLine text={"good"} statistic={good} />
      <StatisticsLine text={"neutral"} statistic={neutral} />
      <StatisticsLine text={"bad"} statistic={bad} />
      <StatisticsLine text={"total"} statistic={total} />
      <StatisticsLine text={"average"} statistic={average.toFixed(2)} />
      <StatisticsLine text={"positive"} statistic={percentageGood.toFixed(2)} />
      <p>average: {average.toFixed(2)}</p>
      <p>positive: {percentageGood.toFixed(2)}%</p>
    </div>
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App