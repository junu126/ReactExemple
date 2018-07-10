import React from 'react';
import TodoItme from './TodoItme';

const Todoitemlist = ({todos, onToggle, onRemove}) => {
    const TodoList = todos.map(
        ({text, check, id}) => {
            return(
                <TodoItme
                text = {text}
                id = {id}
                check = {check}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {id}
                />
            ) 
        }
    );

    return(
        <div className="TodoList">
            {TodoList}
        </div>
    );
}
export default Todoitemlist;