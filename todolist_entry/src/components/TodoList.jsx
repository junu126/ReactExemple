import React from 'react';
import './TodoList.css';

const TodoItem = ( text, id, isDelete ) => {
  return (
    <div className={'TodoItem'}>
      <span>{`${id + 1}. ${text}`}<span onClick={() => isDelete(id)} className='DeleteButton'>X</span></span>
    </div>
  );
}

const TodoList = ({ ItemList, isDelete }) => {
  return(
    <div className='TodoLists'>
      {ItemList.map((item, index) => TodoItem(item, index, isDelete))}
    </div>
  );
}

export default TodoList;