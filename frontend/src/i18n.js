import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      todoList: 'Todo List',
      addTodo: 'Add Todo',
      pending: 'Move to Pending',
      completed: 'Move to Completed',
      edit: 'Edit',
      delete: 'Delete',
      editTodo: 'Edit Todo',
      addNewTodo: 'Add New Todo',
      title: 'Title',
      description: 'Description',
      cancel: 'Cancel',
      saveChanges: 'Save Changes',
      all: 'All',
      allCount: 'All ({{count}})',
      pendingCount: 'Pending ({{count}})',
      completedCount: 'Completed ({{count}})',
      taskUpdatedSuccess: 'Todo updated successfully',
      taskCreatedSuccess: 'Todo created successfully',
      failedToSaveTask: 'Failed to save todo',
      failedToFetchTodos: 'Failed to fetch todos',
      taskDeletedSuccess: 'Todo deleted successfully',
      failedToDeleteTask: 'Failed to delete todo',
      taskMarkedAsCompleted: 'Todo marked as completed',
      taskMarkedAsPending: 'Todo marked as pending',
      failedToUpdateTaskStatus: 'Failed to update todo status',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
