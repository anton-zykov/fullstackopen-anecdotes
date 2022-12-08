import { useDispatch, useSelector } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleVote = () => {
    dispatch(castVote(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 }))
    dispatch(setNotification(`You voted for ${anecdote.content}`, 10))
  }

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>Vote</button>
      </div>
    </div>
  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter((a) => (
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    ))
  })

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      )}
    </div>
  )
}

export default Anecdotes
