import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Main from './Main';
import Weather from './Weather';
import Examples from './Examples';
import About from './About';



var Nav = (props) => (
  <div>
    <h2> Nav component </h2>
    <NavLink to="/" activeClassName="active">Weather</NavLink>
    <NavLink to="/examples" activeClassName="active">Examples</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
    <Route path="/" component={Weather}/>
    <Route path="/examples" component={Examples}/>
    <Route path="/about" component={About}/>
  </div>
);

export default Nav;
