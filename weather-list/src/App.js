import React, { Component } from 'react';
import moment from 'moment';
//import axios from 'axios';
import Weathertemplate from './component/weathertemplate';
import Weathertitle from './component/weathertitle';
import Weatherupdown from './component/weatherupdown';
import Weatherlist from './component/weatherlist';

class App extends Component {

  id = 0;

  state = {
    date : [
      moment().format(`YYYY년 MM월 DD일`)
    ]
  }

  render() {

    const {date} = this.state;

    return (
        <Weathertemplate
        
        title = {(
          <Weathertitle
            bd={date}
          />
        )}

        list = {(
          <Weatherlist
            
          />
        )}

        updown = {(
          <Weatherupdown
          
          />
        )}
      />
    );
  }
}

export default App;
