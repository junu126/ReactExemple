// 각각의 파일을 불러옴.
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

// 프로젝트 메인.
class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 활동을 적어주세요.', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값.
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input : '', // 인풋을 비우고 concat을 이용해 배열에 추가.
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  }
  
// 눌려진 키가 Enter면 handleCreate를 호출하는 함수.
  handleKeyPress = (e) => {
    if(e.key == 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selector = todos[index];  // 선택한 객체

    const nextTodos = [...todos];   // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기.
    nextTodos[index] = {
      ...selector,
      checked: !selector.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
  
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {  // 랜더는 컴포넌트를 만들 때 호출된다.
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this; // 비구조화 할당.
              // this.handleChange,this.handleCreate...등 this를 붙이는 대신
              // 마지막에 this를 할당.

    return (  // 리턴은 컴포넌트를 반환한다
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove = {handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;