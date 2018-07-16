import React from 'react';
import './weatherlist.css';

const Weatherlist = ({wdir, wspd, rain, sky, sky_img, humidity,  temc, temmax, temmin }) => {
    return(
        <div>
            <div className="list-humidity_temperature">
                <span>{humidity}</span>
                <span>{temc}</span>
                <span>{temmax}</span>
                <span>{temmin}</span>
            </div>
            <div className="list-sky">
                <img src={sky_img}></img>
                <span>{sky}</span>
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