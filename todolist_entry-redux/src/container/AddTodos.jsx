import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components/index';
import { deleteTodoList, onHandleToggle } from '../core/redux/action/action';

class AddTodos extends Component {

  isDelete = id => {
    this.props.deleteTodoList(id);
  }

  isOnHandleToggle = id => {
    this.props.onHandleToggle(id);
  }
  
  render() { 
    const { TodoItmes } = this.props;
    return ( 
      <TodoList
        TodoItmes = {TodoItmes}
        isDelete = {this.isDelete}
        isOnHandleToggle = {this.isOnHandleToggle}
      />
     );
  }
}
 
export default AddTodos;