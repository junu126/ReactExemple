import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Weathertemplate from './component/weathertemplate';
import Weathertitle from './component/weathertitle';
import Weatherupdown from './component/weatherupdown';
import Weatherlist from './component/weatherlist';

class App extends Component {

  id = 0;

  state = {
    date : [
      moment().format(`YYYY년 MM월 DD일`)
    ],
    time : [`YYYY-MM-DD hour:minute:second`]
  }

  componentDidMount = () => {
    axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
    .then(res => {
      const times = res.data;
      this.setState(this.state.time = times)
    })
  }

  render() {

    const {time} = this.state;

    return (
        <Weathertemplate

        title = {(
          <Weathertitle
            bd = {this.componentDidMount}
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
/*
{"weather":
  {"minutely":
    [
      {
        "station":{"longitude":"127.37212","latitude":"36.372","name":"대전","id":"133","type":"KMA"},
        "wind":{"wdir":"243.60","wspd":"1.70"},"precipitation":{"sinceOntime":"0.00","type":"0"},
        "sky":{"code":"SKY_A01","name":"맑음"},
        "rain":{"sinceOntime":"0.00","sinceMidnight":"0.00","last10min":"0.00","last15min":"0.00","last30min":"0.00","last1hour":"0.00","last6hour":"0.00","last12hour":"0.00","last24hour":"0.00"},
        "temperature":{"tc":"30.80","tmax":"35.00","tmin":"24.00"},
        "humidity":"68.70",
        "pressure":{"surface":"1002.60","seaLevel":"1010.30"},
        "lightning":"0",
        "timeObservation":"2018-07-14 19:20:00"
      }
    ]
  },
  "common":
    {
      "alertYn":"Y",
      "stormYn":"N"
    },
    "result":{
      "code":9200,
      "requestUrl":"/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600",
      "message":"성공"
    }
  }
*/