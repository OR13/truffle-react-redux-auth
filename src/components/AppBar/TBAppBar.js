import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {
  AppBar,
  Drawer,
  IconButton,
  IconMenu,
  MenuItem
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js';
import { loginUser, logoutUser } from '../../actions';

class TBAppBar extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {

    const { authData } = this.props;

    const OnlyAuthLinks = VisibleOnlyAuth(() =>

      <div>
        <MenuItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />} />
        <MenuItem primaryText="Profile" containerElement={<Link to="/profile" />} />
        <MenuItem primaryText="Create Loan" containerElement={<Link to="/create-loan" />} />
        <MenuItem primaryText="Logout" onClick={() => this.props.dispatch(logoutUser())} />
      </div>

    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <div>
        <MenuItem primaryText="Sign Up" containerElement={<Link to="/signup" />} />
        <MenuItem primaryText="Login" onClick={() => this.props.dispatch(loginUser())} />
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

        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleToggle}>Close Menu</MenuItem>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(TBAppBar);
