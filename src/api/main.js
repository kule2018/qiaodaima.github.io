import axiosAjax from './axios-base.js';
import './mock.js';

// 用户登入
export function login(callback) {
  let options = {
    url: '/login'
  };

  axiosAjax(options, callback);
}

// 编辑用户信息
export function editUserInfo(callback) {
  let options = {
    url: '/editUserInfo'
  };

  axiosAjax(options, callback);
}

// 获取用户列表
export function getUserLIst(callback) {
  let options = {
    url: '/getUserLIst'
  };

  axiosAjax(options, callback);
}
