import React from 'react';
import './weatherlist.css';

const Weatherlist = ({rain_img, rain}) => {
    return(
        <div>
            <div className="list-humidity_temperature">
                
            </div>
            <div className="list-sky">
                
            </div>
            <div className="list-wind_rain">
                <img src={rain_img}></img>
                <span>{rain}</span>
            </div>
        </div>
    );
}

export default Weatherlist;