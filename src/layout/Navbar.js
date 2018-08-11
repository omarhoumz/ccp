import React, { Component } from 'react'
import '../css/layout.css';

export default class Navbar extends Component {
  render () {
    return (
      <header>
        <button className="sm-only side-toggle"><img src="" alt="E"/></button>
        <a href="#!" className="logo">LOGO</a>
        <nav>
          <a href="#!">home</a>
          <a href="#!">about</a>
        </nav>
      </header>
    )
  }
}
