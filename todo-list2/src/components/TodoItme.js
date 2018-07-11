import React from 'react';
import './Todoitem.css';

const TodoItem = ({text, check, onRemove, onToggle, id }) => {
    return( // &times = X자. 곱하기 모양.
        <div className="todolist">
            <span className={`todolist-${check ? 'true' : 'false'}`} onClick={() => onToggle(id)} >{text}</span>
            <span className="remove" onClick={(e) => {
                onRemove(id)
            }}>&times;</span>
        </div>
    );
};

export default TodoItem;