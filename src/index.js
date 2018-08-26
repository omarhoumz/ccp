import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './css/index.css';
import { App, About, Home } from './routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/explore" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
