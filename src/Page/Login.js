import React from 'react'
import ColorModeContainer from '../components/ColorModeContainer'
import Navigation from '../components/Navigation'


const Login = () => {
  return (
    <div className="page-login">
      <ColorModeContainer>
        <Navigation />
        <div className="login">
          <h2>Login</h2>
          <div>
            <label htmlFor="login" className="label-login">Login</label>
            <input className="input-login" id="login" type="text" />
          </div>
          <div>
            <label htmlFor="password" classname="label-password">Password</label>
            <input classname="input-password" id="password" type="password" />
          </div>
          <input classname="input-submit" type="submit" value="Se connecter" />
        </div>
      </ColorModeContainer>
    </div>
  )
}

export default Login
