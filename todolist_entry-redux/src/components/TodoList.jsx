import React from 'react';
import './TodoList.css';

const TodoItem = ( text, id, isDelete, check, isOnHandleToggle ) => {
  return (
    <div className={check === true ? 'TodoItem_on' : 'TodoItem_off'}>
      <span onClick={() => isOnHandleToggle(id)}>{`${id + 1}. ${text}`}</span><span onClick={() => isDelete(id)} className='DeleteButton'>X</span>
    </div>
  );
}

const TodoList = ({ ItemList, isDelete, isOnHandleToggle }) => {
  return(
    <div className='TodoLists'>
      {ItemList.map((item, index) => TodoItem(item.text, index, isDelete, item.check, isOnHandleToggle))}
    </div>
  );
}

export default TodoList;