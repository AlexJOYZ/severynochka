import axios from 'axios';

import { AuthService } from './entities/auth';

const API_URL = 'http://localhost:31299/api';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (config) => config,

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await AuthService.refresh();
        console.log(originalRequest);
        return api.request(originalRequest);
      } catch (e) {
        console.log(error.response?.message);
      }
    }
    throw error;
  },
);
