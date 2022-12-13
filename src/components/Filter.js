import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}

const ConnectedNotes = connect(null, mapDispatchToProps)(Filter)

export default ConnectedNotes