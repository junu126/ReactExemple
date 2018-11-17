import React from 'react';
import './InputBar.css';

const InputBar = ({isEnter, isHandleInput}) => {
  return ( 
    <div className='InputBox'>
      <input 
        className='ListInput' 
        onKeyPress={isEnter} 
        onChange={isHandleInput} 
        placeholder='오늘의 할일은?' 
        type="text"
      />
    </div>
    );
}
 
export default InputBar;