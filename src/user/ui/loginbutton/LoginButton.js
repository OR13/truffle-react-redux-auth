import React from 'react'

const LoginButton = ({ onLoginUserClick }) => {
  return(
      <a href="#" className="pure-menu-link" onClick={(event) => onLoginUserClick(event)}>Login</a>
  )
}

export default LoginButton
