import React, { Component, Fragment } from 'react'
import { Navbar } from '../layout'
import '../css/App.css'

class About extends Component {

  render() {
    return (
      <Fragment>
        <div className="grid-wrapper">
          {/* <Logo /> */}
          <Navbar />
          <p style={{padding: 'var(--header-space)'}}>
            2018 &copy; <a href="https://github.com/omarhoumz" target="_blank" rel="noopener noreferrer" >Omar Houmz</a>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
