import React from 'react';
import createReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

var Weather = createReactClass({
  handleSearch: function(location) {
    alert('re');
  },

  render: function () {
    return (
      <div>
        <h2> Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage />

      </div>
    );
  }
});

export default Weather;
