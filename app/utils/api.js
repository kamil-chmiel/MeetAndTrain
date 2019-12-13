import axios from 'axios';

import {API_URL} from './routes';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const defaultConfig = {
  onSuccess: response => console.info(response),
  onError: error => console.info(error),
};

export default {
  get: (url, config = defaultConfig) =>
    axiosInstance
      .get(url, config)
      .then(config.onSuccess)
      .catch(config.onError),

  post: (url, config = defaultConfig) =>
    axiosInstance
      .post(url, config)
      .then(config.onSuccess)
      .catch(config.onError),
};
