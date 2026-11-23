import axios from 'axios';

// The API client is deliberately credential-free. Add a secure server session or
// short-lived token flow when the backend is connected; do not place secrets here.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const endpoints = {
  auth: '/auth',
  profiles: '/profiles',
  likes: '/likes',
  matches: '/matches',
  conversations: '/conversations',
  reports: '/reports',
};
