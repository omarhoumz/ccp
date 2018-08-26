import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/layout.css';

export default class Navbar extends Component {

  render () {
    return <header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </nav>
    </header>
  }
}
