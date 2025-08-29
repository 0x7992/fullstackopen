import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

//      <StatisticLine text="good" value ={...} />

const StatisticsLine = ({text, value}) => {
  return (  
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (

      <div>
        <h4>statistics</h4>
        No feedback given
        </div>
    )
  }
  
  return(
    <div>
      <h4>statistics</h4>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={(props.good - props.bad)/total} />
          <StatisticsLine text="positive" value={(props.good / total) + " %"} />
        </tbody>
      </table>
      
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  
  return (
    <div>
        <h4>give feedback</h4>
        <Button onClick={increaseGood} text="good"/>
        <Button onClick={increaseNeutral} text="neutral"/>
        <Button onClick={increaseBad} text="bad"/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App