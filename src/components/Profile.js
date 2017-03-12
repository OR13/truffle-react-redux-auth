import React, { Component } from 'react';
import {
  TextField,
  RaisedButton
} from 'material-ui';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name
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

    this.props.onProfileSubmit(this.state.name)
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
          label="Update"
        />
      </form>
    )
  }
}

export default Profile
