import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Aprender React', 'Construir una app de React']);

  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
