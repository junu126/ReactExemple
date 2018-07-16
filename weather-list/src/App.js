import React, { Component } from 'react';
import axios from 'axios';
import Weathertemplate from './component/weathertemplate';
import Weathertitle from './component/weathertitle';
import Weatherlist from './component/weatherlist';

class App extends Component {
  id = 0;

  state = {
    time : `날짜 : YYYY-MM-DD H:M:S`,
    rain : `1시간 동안의 강수량 : 0.00mm`,
    sky_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9WvZJ10MUSbBznnzw3c9mKbEm8GuVpgjbOrfRYUJxMTXQhia",
    sky : `날씨 : 좋으면...`,
    wdir : `바람의 방향 : XXX.X쪽`,
    wspd : `바람의 속도 : XXX.Xm/s`,
    humidity : `습도 : XX.XX%`,
    temperature : {
      temc : `현재 온도 : XX.XX°`,
      temmax : `오늘의 최고 온도 : XX.XX°`,
      temmin : `오늘의 최저 온도 : XX.XX°`
    }
  }

  Refresh = () => {
    axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
      .then(res => {

        const cTime = `날짜 : ${res.data.weather.minutely[0].timeObservation}`;
        const cRain = `1시간 동안의 강수량 : ${res.data.weather.minutely[0].rain.last1hour}mm`;
        const cSky = `날씨 : ${res.data.weather.minutely[0].sky.name}`;
        const cWspd = `바람의 속도 : ${res.data.weather.minutely[0].wind.wspd}m/s`
        const cHum = `습도 : ${res.data.weather.minutely[0].humidity}%`
        const cTemc = `현재 온도 : ${res.data.weather.minutely[0].temperature.tc}°`
        const cTemmax = `오늘의 최고 온도 : ${res.data.weather.minutely[0].temperature.tmax}°`
        const cTemmin = `오늘의 최저 온도 : ${res.data.weather.minutely[0].temperature.tmin}°`

        this.setState(
          {
            time : cTime,
            rain : cRain,
            sky : cSky,
            wspd : cWspd,
            humidity : cHum,
            temperature : {
              temc : cTemc,
              temmax : cTemmax,
              temmin : cTemmin
            }
          }
        );

        // Sky 데이터
        let pSky = res.data.weather.minutely[0].sky.name;

        if(pSky === '비') {
          this.setState({
            sky_img : "https://image.flaticon.com/icons/svg/55/55371.svg" // 비
          })
        } else if(pSky === '눈') {
          this.setState({
            sky_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPAJswiQLlNGzGFivY51xpmxhgRiEXRU_RMC5zfT4UDZvEzRQ0Q" // 눈
          })
        } else if(pSky === '맑음') {
          this.setState({
            sky_img : "https://images.vexels.com/media/users/3/145138/isolated/preview/1de68bf333344dc5a6efca43807cfc6d-sun-peque-as-vigas-de-l-nea-icono-by-vexels.png" // 태양
          })
        }

        // 바람의 방향 데이터
        let pWdir = res.data.weather.minutely[0].wind.wdir;
        pWdir = Number(pWdir);

        if(pWdir >= 45 && pWdir < 135) {
          this.setState({
            wdir : `바람의 방향 : 동쪽(東)`
          })
        } else if(pWdir >= 135 && pWdir < 225) {
          this.setState({
            wdir : `바람의 방향 : 남쪽(南)`
          })
        } else if(pWdir >= 225 && pWdir < 315) {
          this.setState({
            wdir : `바람의 방향 : 서쪽(西)`
          })
        } else if(pWdir >= 360 || pWdir < 45) {
          this.setState({
            wdir : `바람의 방향 : 북쪽(北)`
          })
        }        

      })
  }

  render() {

    const {time, rain, wdir, wspd, sky, sky_img, temperature, humidity } = this.state;

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
            wdir = {wdir}
            wspd = {wspd}
            rain = {rain}
            sky_img = {sky_img}
            sky = {sky}
            humidity = {humidity}
            temc = {temperature.temc}
            temmax = {temperature.temmax}
            temmin = {temperature.temmin}
          />
        )}
      />
    );
  }
}

export default App;
