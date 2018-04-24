import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './MenuBar.css'


class MenuBar extends Component {
  render() {
    return (
      <nav className='menu-bar'>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Photos</Link></li>
        </ul>
{/*         
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cars">Photos</Link></li>
        </ul> */}
      </nav>
    )
  }
}

export default MenuBar