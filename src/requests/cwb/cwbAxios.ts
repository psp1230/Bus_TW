import axios from 'axios';
import { getAuthorizationHeader } from '@/utils/auth';

const request = axios.create();

request.defaults.baseURL = 'https://ptx.transportdata.tw';
request.interceptors.request.use((config) => {
  config.headers = getAuthorizationHeader();
  return config;
});

export default request;
