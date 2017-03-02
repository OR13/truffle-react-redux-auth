import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import TBAppBar from './components/AppBar/AppBar'


// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {

    const { authData } = this.props
    // console.log('App authData: ', authData);
    
    return (
      <MuiThemeProvider className="App">
        <div>
           <TBAppBar
          authData={authData}
          title="Truffle Box"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
