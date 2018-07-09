import React, { Component } from 'react';
import Form from "./components/Form";
import TodoListTemplate from './components/TodoListTemplate';
import Todoitemlist from './components/Todoitemlist';

class App extends Component {

  id = 3

  state =
    {
      input : "",
      todos : [
        {id :0, text :`안녕하세요.`, check : false},
        {id : 1, text : `Hello.`, check : true},
        {id : 2, text : `Hi`, check : false}
      ]
    };

  // 엔터를 치면 실행되게 하거나, add를 누르게 함. 아마 className 이용할 듯?
  press = (e) => {  
    if(e.key === "Enter")
      this.create();
  };
  
  // add버튼을 누르면 추가될 내용이 만들어 져야함.
  create = () => {

    const {input, todos} = this.state
    if(input === ''){
      this.setState({
        input : ''
      })
    }
    else {
      this.setState({
        input : '',
        todos : todos.concat({
          id : this.id++,
          text : input,
          check : false
        })
      });
    }
  }
  
  // 
  change = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  // 클릭했을때 check값을 반대로.
  onToggle = (id) => {

    const {todos} = this.state
    // 분할 적용법.
    const index = todos.findIndex(todo => todo.id === id);
    // index = id중 true만 반환. =>
    // todo는 todos.id의 값 중 id값이 없는 것이 있으면 -1을 반환.
    // id값에 전부 해당되면 해당되는 값을 반환
    // Ex) todo => todo.is === 2
    // return (id:2) - text:Hi, check:true
    const selector = todos[index];
    // todos[index]
    // todos[todos.findIndex(todo => todo.id === id)]
    // todos[0~2] 까지만 있다. 현재는.
    const nextTodos = [...todos];
    // todos의 모든 객체 값을 불러옴
    
    nextTodos[index] = {
      ...selector,
      check: !selector.check
    };
    // nextTodos[index] 에 id별 state값들을 넣는다.
    // check: !id별 state하나씩 비교.check
    // check를 !selector.check로 바꾼다.
    // id{0}의 check : !selector(id{0}의 selector).check(id{0}인 state의 check = true)
    // 결과는 check가 false가 됨.

    this.setState({
      todos: nextTodos
    });
    // state의 todos 를 nextTodos로 변경.
  }

  // X를 클릭하면 사라짐.
  onRemove = (id) => {

    const {todos} = this.state;

    this.setState({
      todos : todos.filter(this.todos = () => todos.id !== id)
    });
  }

  render() {

    const {input, todos} = this.state;
    const {change, create, press, onToggle, onRemove} = this

    return(
      <TodoListTemplate form={(
        <Form 
          value={input} // state
          onChange={change} // 함수
          onCreate={create} // 함수
          onKeyPress={press} // 함수
          />
        )}>
        <Todoitemlist 
          todos={todos} // state
          onToggle={onToggle} // 함수
          onRemove={onRemove} // 함수
        />
      </TodoListTemplate>
    ); // todos에 text, id, check값을 state의 todos로 보냄.
  }
}

export default App;