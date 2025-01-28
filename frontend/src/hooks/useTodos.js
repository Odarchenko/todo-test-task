import { useState, useEffect } from 'react';
import { TasksService } from '../services/api';

export const useTodos = (showAlert) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const response = await TasksService.fetchAll();
      setTodos(response.data);
    } catch (err) {
      showAlert('Failed to fetch todos', 'danger');
      console.error('Error fetching todos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await TasksService.delete(id);
      setTodos(todos.filter(todo => todo.id !== id));
      showAlert('Task deleted successfully');
    } catch (err) {
      showAlert('Failed to delete task', 'danger');
      console.error('Error deleting todo:', err);
    }
  };

  const handleStatusChange = async (id) => {
    const todo = todos.find(t => t.id === id);
    try {
      const response = await TasksService.update(id, {
        completed: !todo.completed
      });
      setTodos(todos.map(t => t.id === id ? response.data : t));
      showAlert(`Task marked as ${response.data.completed ? 'completed' : 'pending'}`);
    } catch (err) {
      showAlert('Failed to update task status', 'danger');
      console.error('Error updating todo status:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    setTodos,
    isLoading,
    handleDelete,
    handleStatusChange
  };
};