import React, {Component} from 'react';
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class TBAppBar extends Component {
  state = {logged: false}
  render() {
    const { authData } = this.props

    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >

        <MenuItem primaryText="Dashboard" href="/dashboard" />
        <MenuItem primaryText="Create Loan" href="/create-loan" />

      </IconMenu>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >

        <MenuItem primaryText="Sign Up" href="/signup" />
      </IconMenu>
    )


    return (
      <div>
        <AppBar
          title="Truffle Box"
          iconElementRight={this.state.logged ? <OnlyAuthLinks/> : <OnlyGuestLinks/>}>
        </AppBar>
        // <p>{this.props.authData == undefined ? "anonymous" : this.props.authData.name}</p>
        <span>{JSON.stringify(this.props)}</span>
      </div>
      // </div>
    );
  }
}

export default TBAppBar;
