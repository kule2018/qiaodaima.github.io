import axios from 'axios';
import './mock.js';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://www.qiaodaima.me';
axios.interceptors.request.use((config) => {
  console.log('请求中...');
  return config;
});

export function login(callback) {
  axios({
    method: 'post',
    url: '/login'
  })
  .then(function(response) {
    console.log(response);
    callback && callback(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}