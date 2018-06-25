import React from 'react';
import './Form.css';

// 내용 추가하는 칸, 버튼
const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (  // 서버로 보내는 데이터.
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;