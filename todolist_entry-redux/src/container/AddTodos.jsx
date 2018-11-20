import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components/index';
import { deleteTodoList, onHandleToggle } from '../core/redux/action/action';

class AddTodos extends Component {

  deleteTodoList = id => {
    this.props.deleteTodoList(id);
  }

  OnHandleToggle = id => {
    this.props.onHandleToggle(id);
  }
  
  render() { 
    const { TodoItems } = this.props;
    return ( 
      <TodoList
        ItemList = {TodoItems}
        isDelete = {this.deleteTodoList}
        isOnHandleToggle = {this.OnHandleToggle}
      />
     );
  }
}

let mapStateToProps = state => ({
  TodoItems : state.TodoItems
});

let mapDispatchToProps = dispatch => ({
  deleteTodoList : id => dispatch(deleteTodoList(id)),
  onHandleToggle : id => dispatch(onHandleToggle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodos);