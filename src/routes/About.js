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
          <div></div>
          <div style={{padding: 'var(--header-space)',gridArea: 'main'}}>
            <p style={{
              fontSize: '150%',
              color: 'var(--dg-color)'
            }}>
              <ul>
                <li>For contributions go to: <a href="https://github.com/omarhoumz/ccp" target="_blank" rel="noopener noreferrer">github.com/omarhoumz/ccp</a></li>
                <li>For support contact me at: <a href="mailto:omarhoumz@gmail.com" target="_blank" rel="noopener noreferrer">omarhoumz@gmail.com</a></li>
              </ul>
            </p>
            <p>
              2018 &copy; <a href="https://github.com/omarhoumz" target="_blank" rel="noopener noreferrer" >Omar Houmz</a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
