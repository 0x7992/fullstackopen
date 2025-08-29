import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button> 

const Votes = ({votes}) => <div>has {votes} votes</div>

const MostVotedAnecdote = ({anecdotes, votes}) => {
  let max = 0;
  let indexOfMax = 0;
  for (let index = 0; index < votes.length; index++) {
    if (votes[index] > max) {
      max = votes[index]
      indexOfMax = index
    }
  }
  return (
    <div>
      {anecdotes[indexOfMax]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const nextAnecdote = () => {
    let newSelectedIndex;
    do {
      newSelectedIndex = Math.floor(Math.random() * anecdotes.length)
    } while(newSelectedIndex == selected)
    setSelected(newSelectedIndex)
  }
  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }
  
  return (
    <div>
      <h4>Anecdote of the day</h4>
      {anecdotes[selected]}<br/>
      <Votes votes={votes[selected]}/>
      <Button onClick={voteForAnecdote} text="vote"  />
      <Button onClick={nextAnecdote} text="next anecdote"  />
      <h4>Most voted anecdote</h4>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App