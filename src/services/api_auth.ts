import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const baseUrl = 'https://api.themoviedb.org/3/'; // Live port

const apiAuth = axios.create({
  baseURL: baseUrl,
});

apiAuth.interceptors.request.use(
  async config => {
    if (!config.params) {
      config.params = {};
    }
    config.params['api_key'] = '4c3ec7fb71c6e708b2e5823630eb8a68';
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default apiAuth;
