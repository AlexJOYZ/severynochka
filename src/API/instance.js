import axios from 'axios';

import { AuthService } from './entities/auth';

const API_URL = 'http://localhost:31299/api';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
export const refreshApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
// Переменные для управления состоянием обновления токена
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      if (originalRequest.url === '/refresh') {
        // Если это запрос на обновление токена и он вернул 401, прокидываем ошибку :cite[6]:cite[9]
        return Promise.reject(error);
      }

      if (originalRequest._isRetry) {
        // Если запрос уже повторялся, прокидываем ошибку :cite[6]
        return Promise.reject(error);
      }

      if (isRefreshing) {
        // Если токен уже обновляется, добавляем запрос в очередь :cite[5]:cite[8]
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._isRetry = true;
      isRefreshing = true;

      try {
        const response = await AuthService.refresh();

        // Обрабатываем очередь failedQueue
        // processQueue(null, newAccessToken);

        // Повторяем оригинальный запрос
        return api(originalRequest);
      } catch (refreshError) {
        // Если обновление токена не удалось, очищаем хранилище и перенаправляем на логин :cite[2]:cite[5]
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
