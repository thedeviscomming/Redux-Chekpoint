import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h1>Liste de Tâches</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
