import Axios, { AxiosRequestConfig } from 'axios';

import { OPENWEATHERMAP_TOKEN, OPENWEATHERMAP_URL } from '@/config';

function authRequestInterceptor(config: AxiosRequestConfig) {
  config.params['appid'] = OPENWEATHERMAP_TOKEN;
  return config;
}

export const axios = Axios.create({
  baseURL: OPENWEATHERMAP_URL,
});

axios.defaults.params = {};
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    // Notify error
    console.log(message);

    return Promise.reject(error);
  }
);
