import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdoteContent'/></div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default NewAnecdoteForm