import React, { Component } from 'react';
import './App.css';
import { AddTodos, InputTodo } from './container/index';
import { Title } from './components/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Title />
          <InputTodo />
          <AddTodos/>
        </div>
      </div>
    );
  }
}

export default App;
