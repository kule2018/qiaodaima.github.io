import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.interceptors.request.use((config) => {
  console.log('请求中...');
  return config;
});