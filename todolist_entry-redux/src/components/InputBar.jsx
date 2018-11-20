import React from 'react';
import './InputBar.css';

const InputBar = ({addTodoList, isHandleInput}) => {
  return ( 
    <div className='InputBox'>
      <input 
        className='ListInput' 
        onKeyPress={addTodoList} 
        onChange={isHandleInput} 
        placeholder='오늘의 할일은?' 
        type="text"
      />
    </div>
    );
}
 
export default InputBar;