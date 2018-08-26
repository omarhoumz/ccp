import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export const Logo = () => (
  <section className="logo-wrapper" style={{gridArea: 'logo'}}>
    <div>
      <Link to="/" className="logo">
        {/* CC Platform */}
        <img
          src={logo}
          alt="CC Platform"
          style={{
            height: '16px'
          }}
          />
      </Link>
    </div>
  </section>
)