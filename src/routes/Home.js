import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Navbar } from '../layout'

export default class Home extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <Navbar />
        <div></div>
        <div
          style={{
            padding: 'var(--header-space)',
            gridArea: 'main',
            fontSize: '165%',
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
          }}
          >
          <h1
            style={{
              color: 'var(--p-color)',
            }}
            >CC Platform</h1>
          <p
            style={{
              marginTop: '0',
              marginBottom: '1.6em',
              color: 'var(--dg-color)'
            }}
            >Get free and high res photos from around the web.</p>
          <Link
            to="/explore"
            className="btn"
            style={{
              fontSize: '1.25rem',
              padding: '.8rem 2rem'
            }}
            >Explore Photos</Link>
        </div>
      </div>
    )
  }
}
