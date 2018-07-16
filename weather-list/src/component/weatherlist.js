import React from 'react';
import './weatherlist.css';

const Weatherlist = ({wdir, wspd, rain, sky, sky_img, humidity,  temc, temmax, temmin }) => {
    return(
        <div>
            <div className="list-humidity_temperature">
                <span className="humidity">{humidity}</span>
                <span className="humidity">{temc}</span>
                <span className="humidity">{temmax}</span>
                <span className="humidity">{temmin}</span>
            </div>
            <div className="list-sky">
                <img className="sky_img" src={sky_img}></img>
                <span className="humidity">{sky}</span>
            </div>
            <div className="list-wind_rain">
                <span>{wdir}</span>
                <span>{wspd}</span>
                <span>{rain}</span>
            </div>
        </div>
    );
}

export default Weatherlist;