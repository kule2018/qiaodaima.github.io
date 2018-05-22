import Mock from 'mockjs';

const baseURL = 'http://www.qiaodaima.me';

Mock.mock(`${baseURL}/login`, {
  msg: '1111',
  token: 'fdsfdsfdsdfs'
});