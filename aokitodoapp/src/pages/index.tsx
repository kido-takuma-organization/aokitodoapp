// src/pages/index.tsx
import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import { Todo } from '../types/types';

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 border border-gray-300 rounded">
            {todo.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;