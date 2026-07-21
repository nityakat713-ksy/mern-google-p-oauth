import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

export const getCurrentUser = () => api.get('/api/current-user');
export const getDashboardData = () => api.get('/api/dashboard');
export const logout = () => api.get('/auth/logout');
export const authStatus = () => api.get('/auth/status');