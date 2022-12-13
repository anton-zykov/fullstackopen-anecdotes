import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const NewAnecdoteForm = (props) => {
  const newAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    props.createAnecdote(content)
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

const mapDispatchToProps = {
  createAnecdote,
}

const ConnectedNotes = connect(null, mapDispatchToProps)(NewAnecdoteForm)

export default ConnectedNotes