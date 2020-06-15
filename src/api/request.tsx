import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_CONSTANTS } from '../constants/endpoint';


const config: any = {
  baseURL: API_CONSTANTS.SERVER_CONFIG_ENDPOINTS,
  timeout: 15000
}

const request = axios.create(config);

request.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default request;