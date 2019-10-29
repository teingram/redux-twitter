import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName='active'>Tweets</NavLink>
          </li>
          <li>
            <NavLink to="/post" activeClassName='active'>Post</NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Nav