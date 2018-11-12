import React, { Component } from 'react';
import './App.css';
import { Title, InputBar, TodoList } from './components/index';

class App extends Component {

  state = {
    value : '',
    TodoItems : [
      'JS 공부하기',
      'HTML 공부하기',
      'CSS 공부하기',
    ],
    toggle : 'TodoItem'
  }

  isHandleInput = (e) => {
    this.setState({value : e.target.value});
  };

  isOnHandleToggle = () => {
    
  };

  isDelete = (id) => {
    const { TodoItems } = this.state;

    this.setState({TodoItems : TodoItems.filter((item, index) => index !== id)})
  }

  AddTodoList = () => {
    const { value, TodoItems } = this.state;

    TodoItems.push(value);

    this.setState({
      TodoItems,
      value : ''
    });
  };

  isEnter = (e) => {
    const { value } = this.state;
    
    if(e.key === 'Enter') {
      if(value !== '')
        this.AddTodoList();

      e.target.value = '';
    }
  };

  render() {
    const { TodoItems } = this.state;

    return (
      <div className="App">
        <div className='container'>
          <Title />
          <InputBar 
            isEnter = {this.isEnter}
            isHandleInput = {this.isHandleInput}
          />
          <TodoList 
            ItemList = {TodoItems}
            isDelete = {this.isDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
