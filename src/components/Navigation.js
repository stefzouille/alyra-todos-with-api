import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className="nav-home" activeClassName="nav-active">
          <li>
            Home
          </li>
        </NavLink>
        <NavLink to="/Login" className="nav-login" activeClassName="nav-active">
          <li>
            Login
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
