import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const TasksService = {
  fetchAll: () => api.get('/tasks'),
  create: (data) => api.post('/tasks', { task: data }),
  update: (id, data) => api.patch(`/tasks/${id}`, { task: data }),
  delete: (id) => api.delete(`/tasks/${id}`),
};
