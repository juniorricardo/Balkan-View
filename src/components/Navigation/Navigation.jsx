import React, { Component } from 'react'
import './navigation.css'

class Navigation extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
          <img
            className="d-inline-block align-top"
            src={this.props.logo}
            width='30'
            height='30'
            alt='logo'
          /> Sucursal bancario
        </a>
        
      </nav>
    )
  }
}

export default Navigation
