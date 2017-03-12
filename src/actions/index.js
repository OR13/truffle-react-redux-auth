import Web3 from 'web3'
import AuthenticationContract from '../../build/contracts/Authentication.json'
import { browserHistory } from 'react-router'

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)
const contract = require('truffle-contract')

export const USER_LOGGED_IN = 'USER_LOGGED_IN';

// Logs user in and redirects to dashboard.
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

// Logs user in and redirects to dashboard.
export function loginUser() {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(provider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    // Get current ethereum wallet.
    var coinbase = web3.eth.coinbase;

    authentication.deployed().then(function(instance) {
      authenticationInstance = instance

      // Attempt to login user.
      authenticationInstance.login({from: coinbase})
      .catch(function(result) {
        // If error, go to signup page.
        console.log('Wallet ' + coinbase + ' does not have an account!')

        return browserHistory.push('/signup')
      })
      .then(function(result) {
        // If no error, login user.
        var userName = web3.toUtf8(result)

        dispatch(userLoggedIn({"name": userName}))

        // Used a manual redirect here as opposed to a wrapper.
        // This way, once logged in a user can still access the home page.
        var currentLocation = browserHistory.getCurrentLocation()

        if ('redirect' in currentLocation.query)
        {
          return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
        }

        return browserHistory.push('/dashboard')
      })
    })
  }
}

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

// Creates new user and then logs them in.
function userSignedUp(user) {
  return {
    type: USER_SIGNED_UP,
    payload: user
  }
}

// Creates new user and then logs them in.
export function signUpUser(name) {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(provider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    // Get current ethereum wallet.
    var coinbase = web3.eth.coinbase;

    authentication.deployed().then(function(instance) {
      authenticationInstance = instance

      // Attempt to sign up user.
      authenticationInstance.signup(name, {from: coinbase})
      .catch(function(result) {
        // If error...
      })
      .then(function(result) {
        // If no error, login user.
        dispatch(loginUser())
      })
    })
  }
}

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

// Logs user out and redirects to home page.
function userLoggedOut(user) {
  return {
    type: USER_LOGGED_OUT,
    payload: user
  }
}

// Logs user out and redirects to home page.
export function logoutUser() {
  return function(dispatch) {
    dispatch(userLoggedOut())
    return browserHistory.push('/')
  }
}

export const USER_UPDATED = 'USER_UPDATED'

// Updates current user and alerts them that their account has been updated.
function userUpdated(user) {
  return {
    type: USER_UPDATED,
    payload: user
  }
}

// Updates current user and alerts them that their account has been updated.
export function updateUser(name) {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(provider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    // Get current ethereum wallet. TODO: Wrap in try/catch.
    var coinbase = web3.eth.coinbase;

    authentication.deployed().then(function(instance) {
      authenticationInstance = instance

      // Attempt to login user.
      authenticationInstance.update(name, {from: coinbase})
      .catch(function(result) {
        // If error...
      })
      .then(function(result) {
        // If no error, update user.

        dispatch(userUpdated({"name": name}))

        alert('Name updated!')
      })
    })
  }
}
