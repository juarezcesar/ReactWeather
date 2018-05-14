import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';



ReactDOM.render(
  <Router>
    <div>
      <Main />
    </div>
  </Router>

  ,
  document.getElementById('app')
);

