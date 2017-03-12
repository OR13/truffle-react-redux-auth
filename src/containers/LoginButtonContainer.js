import { connect } from 'react-redux'
import LoginButton from '../components/LoginButton'
import { loginUser } from '../actions/LoginActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();

      dispatch(loginUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
