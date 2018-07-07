import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeypress}) => {
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeypress}/>
            <button className="create-button" onCreate={onCreate}>
                Add
            </button>
        </div>
    );
};

export default Form;