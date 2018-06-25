import React from 'react';  // React를 사용하겠다고 알려줌.
import './TodoListTemplate.css';    // css 불러오기

// 템플렛
const TodoListTemplate = ({form, children}) => {
  return (  // 서버로 보낼 데이터들
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;

// 이 컴포넌트는 함수형 컴포넌트.