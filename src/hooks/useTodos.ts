import { useEffect, useState } from 'react';
import { TodoEntry } from '../types/todo';
import { api } from '../services/api';
import { message } from 'antd';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('input.json');
        const data = response.data?.todos as TodoEntry[];
        console.log('data :', data);

        const validData = data.filter(
          (item): item is TodoEntry =>
            typeof item.id === 'number' &&
            typeof item.content === 'string' &&
            typeof item.checked === 'boolean'
        );

        setTodos(validData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getNextId = () => {
    if (todos.length === 0) return 1;
    const maxId = Math.max(...todos.map(todo => todo.id));
    return maxId + 1;
  };

  const addTodo = (content: string) => {
    const newTodo: TodoEntry = {
      id: getNextId(),
      content,
      checked: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => {
      const todoToRemove = prev.find(todo => todo.id === id);
      if (todoToRemove) {
        const maxLength = 20;
        const name =
          todoToRemove.content.length > maxLength
            ? todoToRemove.content.slice(0, maxLength) + '...'
            : todoToRemove.content;

        message.info(`Deleted: ${name}`, 3);
      }

      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const editTodo = (id: number, newContent: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo, editTodo, loading };
};
