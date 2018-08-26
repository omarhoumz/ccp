import React, { Component, Fragment } from 'react';
import { Navbar, Sidebar, Main } from '../layout'
import '../css/App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      website: '1'
    }
  }

  onChangeWebsite (e) {
    this.setState({
      website: e.target.value
    })
  }

  render() {
    const { website } = this.state

    return (
      <Fragment>
        <div className="grid-wrapper">
          {/* <Logo /> */}
          <Navbar />
          <Sidebar website={ website } onChangeWebsite={(e) => this.onChangeWebsite(e)} />
          <Main website={website} />
        </div>
      </Fragment>
    );
  }
}

export default App;
