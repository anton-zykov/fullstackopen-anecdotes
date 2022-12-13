import { connect } from 'react-redux'

const Notification = (props) => {
  if (props.notification) {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotes = connect(mapStateToProps)(Notification)

export default ConnectedNotes