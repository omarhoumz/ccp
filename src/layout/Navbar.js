import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { Logo } from '../components'
import '../css/layout.css'

export default class Navbar extends Component {

  render () {
    return <Fragment>
      <Logo />
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </Fragment>
  }
}
