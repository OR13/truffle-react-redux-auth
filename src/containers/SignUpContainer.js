import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import { signUpUser } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpSubmit: (name) => {
      event.preventDefault();
      dispatch(signUpUser(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
