import React, { Component } from 'react'
import ProfileContainer from '../containers/ProfileContainer'

class Profile extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Edit your account details here.</p>
            <ProfileContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
