import { connect } from 'react-redux'
import LogoutButton from '../components/LogoutButton'
import { logoutUser } from '../actions/LogoutActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUserClick: (event) => {
      event.preventDefault();

      dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton)
