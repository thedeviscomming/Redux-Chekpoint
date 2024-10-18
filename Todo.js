import React, { useState } from 'react';

const Todo = ({ todo, toggleTodo, editTodo, removeTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleEdit = () => {
    editTodo(newDescription);
    setEditing(false);
  };

  return (
    <div>
      <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
        {isEditing ? (
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        ) : (
          todo.description
        )}
      </span>
      <button onClick={toggleTodo}>{todo.isDone ? 'Pas fait' : 'Fait'}</button>
      {isEditing ? (
        <button onClick={handleEdit}>Sauvegarder</button>
      ) : (
        <button onClick={() => setEditing(true)}>Modifier</button>
      )}
      <button onClick={removeTodo}>Supprimer</button>
    </div>
  );
};

export default Todo;
