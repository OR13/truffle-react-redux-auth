import React, { Component } from 'react';
import {
  TextField,
  RaisedButton
} from 'material-ui';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onSignUpSubmit(this.state.name)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          hintText="John Smith"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={this.onInputChange.bind(this)}
        /><br />
        <RaisedButton
          type="submit"
          primary={true}
          label="Sign Up"
        />
      </form>
    )
  }
}

export default SignUp
