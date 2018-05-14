import React from 'react';
import createReactClass from 'create-react-class';
import Nav from './Nav';
import WeatherForm from  './WeatherForm';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { Button, Icon } from 'antd';


var Main = createReactClass({
  render: function () {
    return (
      <div>
        <h2>Main Component</h2>
        <Nav/>
      </div>
    );
  }
});

export default Main;
