import { useState, useEffect, useCallback } from 'react';
import { TasksService } from '../services/api';
import { useTranslation } from 'react-i18next';

export const useTodos = (showAlert) => {
  const { t } = useTranslation();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchTodos = useCallback(async () => {
    try {
      const response = await TasksService.fetchAll();
      setTodos(response.data);
    } catch (err) {
      showAlert(t('failedToFetchTodos'), 'danger');
      console.error('Error fetching todos:', err);
    } finally {
      setIsLoading(false);
    }
  }, [showAlert, t]);

  const handleDelete = async (id) => {
    try {
      await TasksService.delete(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      showAlert(t('taskDeletedSuccess'));
    } catch (err) {
      showAlert(t('failedToDeleteTask'), 'danger');
      console.error('Error deleting todo:', err);
    }
  };

  const handleStatusChange = async (id) => {
    const todo = todos.find((t) => t.id === id);
    try {
      const response = await TasksService.update(id, {
        completed: !todo.completed,
      });
      setTodos(todos.map((t) => (t.id === id ? response.data : t)));
      showAlert(
        t(
          response.data.completed
            ? 'taskMarkedAsCompleted'
            : 'taskMarkedAsPending'
        )
      );
    } catch (err) {
      showAlert(t('failedToUpdateTaskStatus'), 'danger');
      console.error('Error updating todo status:', err);
    }
  };

  useEffect(() => {
    if (!hasFetched) {
      fetchTodos();
      setHasFetched(true);
    }
  }, [hasFetched, fetchTodos]);

  return {
    todos,
    setTodos,
    isLoading,
    handleDelete,
    handleStatusChange,
  };
};
