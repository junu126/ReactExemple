import React from 'react';
import './Todoitem.css';

const TodoItem = ({text, check, onRemove, onToggle, id }) => {
    return( // &times = X자. 곱하기 모양.
        <div className="todolist">
            <div className="remove" onClick={(e) => {
                onRemove(id)
                console.log(onRemove(id) + '2');
            }}>&times;</div>
            <div onClick={() => onToggle(id)} className={`todolist ${check ? 'true' : 'false'}`}>
                <div>{text}</div>
            </div>
        </div>
    );
};

export default TodoItem;