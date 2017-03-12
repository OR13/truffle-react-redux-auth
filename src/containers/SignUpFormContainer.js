import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
import { signUpUser } from '../actions/SignUpActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpFormSubmit: (name) => {
      event.preventDefault();

      dispatch(signUpUser(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
