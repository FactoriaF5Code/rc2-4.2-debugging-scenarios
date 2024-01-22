import React from 'react';
import Todo from './App';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        <Todo key={index} todo={todo} />
      })}
    </ul>
  );
}

export default TodoList;
