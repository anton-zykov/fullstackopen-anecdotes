import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      const anecdoteForVote = state.find((a) => a.id === id)
      const changedAnecdote = {
        ...anecdoteForVote,
        votes: anecdoteForVote.votes + 1
      }
      return state
        .map((a) => a.id === id ? changedAnecdote : a)
        .sort((x, y) => - x.votes + y.votes)
    },
    setAnecdotes(state, action) {
      return action.payload.sort((x, y) => - x.votes + y.votes)
    }
  },
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const castVote = (id, updatedAnecdote) => {
  return async (dispatch) => {
    await anecdoteService.update(id, updatedAnecdote)
    dispatch(vote(id))
  }
}

export const { appendAnecdote, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer