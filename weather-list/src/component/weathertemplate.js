import React from 'react';
import './weathertemplate.css';

const Weathertemplate = ({title, list, updown}) => {
    return(
        <main className="main">
            <section className="title">
                {title}
            </section>
            <section className="weather-list">
                {list}
            </section>
            <div className="updown">
                {updown}
            </div>
        </main>
    );
};

export default Weathertemplate;