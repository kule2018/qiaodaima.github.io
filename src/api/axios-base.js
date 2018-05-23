import Axios from 'axios';

Axios.defaults.timeout = 5000;
Axios.defaults.baseURL = 'http://www.wahaha.com';

// http 请求拦截
Axios.interceptors.request.use(config => {
  console.log('请求中...');
  return config;
}, error => {
  console.log('请求超时');
  return Promise.reject(error);
});

// http 响应拦截
Axios.interceptors.response.use(data => {
  console.log('请求成功');
  return data;
}, error => {
  console.log('请求失败');
  return Promise.reject(error);
});

// 请求实例
function axiosAjax(options, callback) {
  let defaultOptions = {
    method: 'get',
    url: ''
  };

  defaultOptions = Object.assign({}, defaultOptions, options);

  Axios(defaultOptions)
    .then(response => {
      callback && callback(response.data);
    })
    .catch(error => {
      console.log('封装这边的失败');
    });
}

export default axiosAjax;
