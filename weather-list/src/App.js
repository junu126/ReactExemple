import React, { Component } from 'react';
import axios from 'axios';
import Weathertemplate from './component/weathertemplate';
import Weathertitle from './component/weathertitle';
import Weatherupdown from './component/weatherupdown';
import Weatherlist from './component/weatherlist';

class App extends Component {
  id = 0;

  state = {
    time : `날짜 : YYYY-MM-DD H:M:S`,
    rain : `1시간 동안의 강수량 : 0.00mm`,
    rain_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9WvZJ10MUSbBznnzw3c9mKbEm8GuVpgjbOrfRYUJxMTXQhia"
  }

  Refresh = () => {
    axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
      .then(res => {
        const cTime = `날짜 : ${res.data.weather.minutely[0].timeObservation}`;
        const cRain = `24시간 동안의 강수량 : ${res.data.weather.minutely[0].rain.last1hour}mm`;
        
        this.setState(
          {
            time : cTime,
            rain : cRain,
          }
        );

        let pRain = res.data.weather.minutely[0].rain.last1hour;
        pRain = Number(pRain);

        if(30 > pRain && pRain > 0) {
          this.setState({
            rain_img : "https://image.flaticon.com/icons/svg/55/55371.svg" // 비
          })

        } else if(pRain > 30) {
          this.setState({
            rain_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzddpaqW5xWn3q3ECzpafnXJsv34NxGdSFnAunOzDAu0GuqpJAMg" // 폭우
          })

        } else if(pRain <= 0) {
          this.setState({
            rain_img : "https://images.vexels.com/media/users/3/145138/isolated/preview/1de68bf333344dc5a6efca43807cfc6d-sun-peque-as-vigas-de-l-nea-icono-by-vexels.png" // 태양
          })
        }
      })
  }

  render() {

    const {time, rain, rain_img} = this.state;

    return (
        <Weathertemplate
        change = {this.Refresh}
        title = {(
          <Weathertitle
            bd = {time}
          />
        )}

        list = {(
          <Weatherlist
            rain_img = {rain_img}
            rain = {rain}
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
        "wind":{"wdir":"243.60","wspd":"1.70"}, = 바람
        "precipitation":{"sinceOntime":"0.00","type":"0"},
        "sky":{"code":"SKY_A01","name":"맑음"}, = 날씨
        "rain":{"sinceOntime":"0.00","sinceMidnight":"0.00","last10min":"0.00","last15min":"0.00","last30min":"0.00","last1hour":"0.00","last6hour":"0.00","last12hour":"0.00","last24hour":"0.00"},
        "temperature":{"tc":"30.80","tmax":"35.00","tmin":"24.00"}, = 온도
        "humidity":"68.70", = 습기
        "pressure":{"surface":"1002.60","seaLevel":"1010.30"}, = 압력(?)
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