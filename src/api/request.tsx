import axios from 'axios';
import AsyncStorage  from '@react-native-community/async-storage';
import { API_CONSTANTS } from '../constants/endpoint';


const config: any = {
  baseURL: API_CONSTANTS.SERVER_CONFIG_ENDPOINTS,
  timeout: 15000
}

const request = axios.create(config);

request.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem('token');
    // const token = '9bfc286980e0ee3a14d21d4675543cc203ab03b4';
    // if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = 'Token 9bfc286980e0ee3a14d21d4675543cc203ab03b4';
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default request;