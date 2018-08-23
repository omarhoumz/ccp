import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../layout'
import '../css/App.css';

class About extends Component {

  render() {
    return (
      <Fragment>
        <div className="grid-wrapper">
          <section className="logo-wrapper" style={{gridArea: 'logo'}}>
            <div>
              <Link to="/" className="logo">LOGO</Link>
            </div>
          </section>
          <Navbar />
          <p style={{padding: 'var(--header-space)'}}>
            2018 &copy; <a href="https://github.com/omarhoumz" target="_blank" rel="noopener" >Omar Houmz</a>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
