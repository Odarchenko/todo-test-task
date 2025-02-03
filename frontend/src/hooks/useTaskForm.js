import { useState } from 'react';
import { TasksService } from '../services/api';
import { useTranslation } from 'react-i18next';

export const useTaskForm = (todos, setTodos, showAlert) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleShowModal = (todo = null) => {
    setCurrentTodo(todo);
    setFormData({
      title: todo ? todo.title : '',
      description: todo ? todo.description : '',
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTodo(null);
    setFormData({ title: '', description: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentTodo) {
        const response = await TasksService.update(currentTodo.id, formData);
        if (response.errors) {
          showAlert(response.errors.join(', '), 'danger');
        } else {
          setTodos(
            todos.map((todo) =>
              todo.id === currentTodo.id ? response.data : todo
            )
          );
          showAlert(t('taskUpdatedSuccess'));
        }
      } else {
        const response = await TasksService.create(formData);
        if (response.errors) {
          showAlert(response.errors.join(', '), 'danger');
        } else {
          setTodos([...todos, response.data]);
          showAlert(t('taskCreatedSuccess'));
        }
      }
      handleCloseModal();
    } catch (err) {
      showAlert(
        err.response?.data?.errors?.join(', ') || t('failedToSaveTask'),
        'danger'
      );
      console.error('Error saving todo:', err);
    }
  };

  return {
    showModal,
    currentTodo,
    formData,
    handleShowModal,
    handleCloseModal,
    handleSubmit,
    setFormData,
  };
};
