import React from 'react';
import './TodoList.css';

const TodoItem = ( text, id, toggle ) => {
  return (
    <div className={toggle}>
      <span>{`${id + 1}. ${text}`}<span className='DeleteButton'>X</span></span>
    </div>
  );
}

const TodoList = ({ ItemList, onToggleTodo }) => {
  return(
    <div className='TodoLists'>
      {ItemList.map((item, index) => TodoItem(item, index, onToggleTodo))}
    </div>
  );
}

export default TodoList;