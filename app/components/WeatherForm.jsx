import React from 'react';
import createReactClass from 'create-react-class';

var WeatherForm = createReactClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    e.target.reset();

    var location = this.refs.location.value;


    if(location.length >0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  },

  render: () => {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref='location'/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
})


export default WeatherForm;
