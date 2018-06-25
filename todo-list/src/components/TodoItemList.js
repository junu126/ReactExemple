import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    /* 
    todos : todo 객체들이 들어있는 배열
    onToggle : 체크박스를 키고 끄는 함수
    onRemove : 아이템을 삭제시키는 함수
    */

    const todoList = todos.map(
        ({id, text, checked}) => (
            <TodoItem
                id = {id}
                text = {text}
                checked = {checked}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {id}
            />
        )
    );
    /* 
    const todoList = todos.map(
        (todo) => (
            <TodoItem
                {...todo}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {todo.id}
            />
        )
    )와 위의 부문과 같다.
    */

       return (
        <div>
            {todoList}
        </div>
      );
    }
  }
  
  export default TodoItemList;