import React from 'react';
import './Todoitem.css';

function TodoItem({text, check, onRemove, onToggle, id }) {
    return( // &times = X자. 곱하기 모양.
        <div className="todolist" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)
            }}>&times;</div>
            <div className={`todolist ${check ? 'true' : 'false'}`}>
                <div>{text}</div>
            </div>
        </div>
    );
};

export default TodoItem;