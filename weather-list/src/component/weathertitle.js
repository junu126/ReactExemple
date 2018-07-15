import React from 'react';
import './weathertitle.css'

const Weathertitle = ({bd, }) => {
    return(
        <div className="title">
        
            <span className="date">{bd}</span>
            <span className="text">WEATHER-LIST</span>
            <footer className="mini-text">in Daejeon</footer>
        </div>
    );
}

export default Weathertitle;