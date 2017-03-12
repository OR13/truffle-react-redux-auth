import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm'
import { updateUser } from '../actions/ProfileActions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (name) => {
      event.preventDefault();

      dispatch(updateUser(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
