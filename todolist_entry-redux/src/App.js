import React, { Component } from 'react';
import './App.css';
import { Title, InputBar, TodoList } from './components/index';

class App extends Component {

  state = {
    value : '',
    TodoItems : [
      {text : '블로그 포스팅하기', check : false},
      {text : '깃허브 커밋하기', check : false},
      {text : '소설 읽기', check : false},
    ],
  }

  // HTML의 Input값을 state에 실시간 저장
  isHandleInput = (e) => {
    this.setState({value : e.target.value});
  };

  /* state에 선언된 배열을 바꾸는 방법.
   *
   * 1. state에 있는 배열을 복사해서 변수에 담음.
   * 2. 복사한 배열에 있는 모든 index에 객체를 생성
   * 3. 변수에 state의 객체내용을 복사
   * 4. state에서 변경시키고 싶은 값을 변수에서 변경
   * 5. state에 변수를 넣음.
   *  아래 함수에 적용했음.
   */

  // Todo를 클릭 할 경우 On/Off 조절
  isOnHandleToggle = (id) => {
    const { TodoItems } = this.state;
    const SelectItem = [ ...TodoItems ];  // state 복사

    SelectItem[id] = {
      ...TodoItems[id],  // 기존의 객체내용 복사
      check : !TodoItems[id].check // 덮어씌우기
    };

    this.setState({
      TodoItems : SelectItem  // state 변경
    })
  };

  // Todo 삭제
  isDelete = (id) => {
    const { TodoItems } = this.state;

    this.setState({
      TodoItems : TodoItems.filter((items ,index) => index !== id)
    });
  }

  // Todo 추가
  AddTodoList = () => {
    const { value, TodoItems } = this.state;

    TodoItems.push({text : value, check : false});

    this.setState({
      TodoItems,
      value : ''
    });
  };

  // Enter시 Todo 추가
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

          {/* 제목 */}
          <Title />

          {/* Input */}
          <InputBar 
            isEnter = {this.isEnter}
            isHandleInput = {this.isHandleInput}
          />

          {/* Todos */}
          <TodoList 
            ItemList = {TodoItems}
            isDelete = {this.isDelete}
            isOnHandleToggle = {this.isOnHandleToggle}
          />
        </div>
      </div>
    );
  }
}

export default App;
