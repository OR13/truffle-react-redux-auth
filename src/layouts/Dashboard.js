import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    const { authData } = this.props

    console.log('dashboard authData: ', authData);

    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>

          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
