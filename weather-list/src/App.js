import React, { Component } from 'react';
import axios from 'axios';
import Weathertemplate from './component/weathertemplate';
import Weathertitle from './component/weathertitle';
import Weatherlist from './component/weatherlist';

class App extends Component {

  state = {
    time : `Date : YYYY-MM-DD H:M:S`,
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

        const cTime = `Date : ${res.data.weather.minutely[0].timeObservation}`;
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
        } else if(pSky === '구름조금') {
          this.setState({
            sky_img : "data:image/png;base64,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" // 구름조금
          })
        } else if(pSky === '구름많음') {
          this.setState({
            sky_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3FPfG8R8Om0L-wkGFaWgPBluvWWBK8c87qZGJGm0dqF6tajlKw" // 구름조금
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
