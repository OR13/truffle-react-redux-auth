import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { updateUser } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileSubmit: (name) => {
      event.preventDefault();
      dispatch(updateUser(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
