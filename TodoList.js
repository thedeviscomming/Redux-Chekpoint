import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from './todoSlice';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={() => dispatch(toggleTodo(todo.id))}
          editTodo={(description) => dispatch(editTodo({ id: todo.id, description }))}
          removeTodo={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
