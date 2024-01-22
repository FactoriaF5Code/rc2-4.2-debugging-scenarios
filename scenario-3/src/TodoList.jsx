import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            Tarea {index + 1}: {todo.text}
          </span>
          <button onClick={() => toggleComplete(index)}>Completar</button>
          <button onClick={() => deleteTodo(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
