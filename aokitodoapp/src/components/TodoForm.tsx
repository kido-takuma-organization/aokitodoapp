// src/components/TodoForm.tsx
import React, { useState } from 'react';
import { Todo } from '../types/types';

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      addTodo({
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;