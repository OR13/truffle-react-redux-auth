import React, { Component } from 'react';
// import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'

import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'

import Drawer from 'material-ui/Drawer';

class TBAppBar extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {

    const { authData } = this.props;

    console.log('appBar AuthData', authData)

    const OnlyAuthLinks = VisibleOnlyAuth(() =>

      <div>
        <MenuItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />} />
        <MenuItem primaryText="Profile" containerElement={<Link to="/profile" />} />
        <MenuItem primaryText="Create Loan" containerElement={<Link to="/create-load" />} />
        <MenuItem primaryText="Logout" containerElement={<LogoutButtonContainer />} />
      </div>

    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <div>
        <MenuItem primaryText="Sign Up" containerElement={<Link to="/signup" />} />
        <MenuItem primaryText="Login" containerElement={<LoginButtonContainer />} />
      </div>
    )

    return (
      <div>
        <AppBar
          title="Truffle Box"
          
          iconElementLeft={  <IconButton
                    tooltip="Learn more about this truffle box..."
                    tooltipPosition="bottom-right"
                    onTouchTap={this.handleToggle}
                >  <NavigationMenu /></IconButton>}
          iconElementRight={<IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }} >
            <OnlyAuthLinks />
            <OnlyGuestLinks />
          </IconMenu>}>
        </AppBar>

        <Drawer width={420} openSecondary={true} open={this.state.open} >
          <AppBar title="Sub Truffle Box" />
        </Drawer>
      </div>
    );
  }
}

export default TBAppBar;
