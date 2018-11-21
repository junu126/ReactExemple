import React, { Component } from 'react';
import { addTodoList, isHandleInput } from '../core/redux/action/action'
import { InputBar } from '../components/index';
import { connect } from 'react-redux';

class InputTodo extends Component {

  addTodoList = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodoList(e.target.value);
      e.target.value = null;
    }
  }

  isHandleInput = (e) => {
    this.props.isHandleInput(e.target.value);
  }

  render() { 
    return ( 
      <InputBar 
        addTodoList = {this.addTodoList}
        isHandleInput = {this.isHandleInput}
      />
     );
  }
}

let mapDispatchToProps = (dispatch) => ({
  addTodoList : text => dispatch(addTodoList(text)),
  isHandleInput : value => dispatch(isHandleInput(value))
});
 
export default connect(
  null,
  mapDispatchToProps
)(InputTodo);