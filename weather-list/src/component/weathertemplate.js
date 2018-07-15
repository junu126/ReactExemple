import React from 'react';
import './weathertemplate.css';

const Weathertemplate = ({title, list, updown, change}) => {
    return(
        <main className="main">
            <button className="btn" type="button" onClick={change}><img src="data:image/png;base64,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"/></button>
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