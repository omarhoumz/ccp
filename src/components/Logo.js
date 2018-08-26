import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => (
  <section className="logo-wrapper" style={{gridArea: 'logo'}}>
    <div>
      <Link to="/" className="logo">CC Platform</Link>
    </div>
  </section>
)