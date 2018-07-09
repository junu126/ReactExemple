import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button className="create-button" onClick={onCreate}>
                Add
            </button>
        </div>
    );  // onClick = {onCreate} 에서 {}안에 있는 값이 매개변수 값. 앞에꺼는 내장 함수
};

export default Form;