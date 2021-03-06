import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form,list}) => {
    return (
        <main className="Main">
            <div className="title">
                TO-DO LIST
            </div>
            <span className="minititle">SEIZE THE DAY!</span>
            <section className="input-main">
                {form}
            </section>
            <section className="list-main">
                {list}
            </section>
        </main>
    );
};

export default TodoListTemplate;