import React from 'react';
import TodoItme from './TodoItme';

function Todoitemlist(todos, onToggle, onRemove) {
    const TodoList = todos.map(
        ({text, check, id}) => {
            <TodoItme 
                text = {text}
                id = {id}
                check = {check}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {id}
            />
        }
    );

    return(
        <div>
            {TodoList}
        </div>
    )
}
export default Todoitemlist