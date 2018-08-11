import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, Main } from '../layout'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Sidebar />
        <Main />
      </Fragment>
    );
  }
}

export default App;
