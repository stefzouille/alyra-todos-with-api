import React from 'react'
import { NavLink } from "react-router-dom"
import "../style/Navigation.css"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className="nav-home" activeClassName="nav-active">
          
            Home
         
        </NavLink>
        <NavLink to="/Login" className="nav-login" activeClassName="nav-active">
         
            Login
          
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
