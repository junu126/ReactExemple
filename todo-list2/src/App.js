import React, { Component } from 'react';
import Form from "./components/Form";
import TodoListTemplate from './components/TodoListTemplate';
import Todoitemlist from './components/Todoitemlist';

class App extends Component {

  state =
    {
      input : ' ',
      todos : [
        {id = 0, text = `안녕하세요.`, check = true},
        {id = 1, text = `Hello.`, check = true},
        {id = 2, text = `Hi`, check = true}
      ]

    }
  
  press = () => {  // 엔터를 치면 실행되게 하거나, add를 누르게 함. 아마 className 이용할 듯?
    
  };
  
  create = () => { // add버튼을 누르면 추가될 내용이 만들어 져야함.
    

  };
  
  change = () => {
  
  };

  value = () => {
    return(
      // 입력할 수 있게 하려면 어쩝니까?
      this.setState({
        state:this.value
        }
      )
    )
  }

  text = () => {
    return(
      this.setState(
        
      )
    )
  }

  render() {

    const {input, create, press, change} = this.state;

    return(
      <TodoListTemplate form={(
        <Form 
          value={input} 
          onCreate={create} 
          onKeypress={press} 
          onChange={change}
          />
        )}>
        <Todoitemlist todos={todos} />
      </TodoListTemplate>
    )
  }
}

export default App;