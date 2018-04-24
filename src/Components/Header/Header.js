import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar/MenuBar'

import './Header.css'
//import logo from '../../images/logo.jpg'


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header__mask'>
          <div className='header__container'>
                {/* <div className='header__logo-wrapper'>
              <Link to="/">
                <img className='header__logo' src={logo} alt="logo"/>
              </Link>
                </div> */}
                <div className='header__shop-info'>
                    <div className='header__contactnumber'>555</div>
                    <div className='header__shop-info__address'>364 Stuff St, Stuff, MA 33333</div>
                </div>
          </div>
          <MenuBar/>
        </div>
      </header>
    )
  }
}

export default Header
