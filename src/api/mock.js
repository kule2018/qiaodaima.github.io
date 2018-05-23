import Mock from 'mockjs';

const baseURL = 'http://www.wahaha.com';

// 用户登入
Mock.mock(`${baseURL}/login`, {
  'msg': 'string',
  'msgCode': 0,
  'msgDesc': 'string',
  'result': {},
  'subMsg': 'string',
  'subMsgCode': 'string'
});

// 获取用户信息
Mock.mock(`${baseURL}/getUserInfo`, {
  'msg': 'string',
  'msgCode': 0,
  'msgDesc': 'string',
  'result': {},
  'subMsg': 'string',
  'subMsgCode': 'string'
});

// 编辑用户信息
Mock.mock(`${baseURL}/editUserInfo`, {
  'msg': 'string',
  'msgCode': 0,
  'msgDesc': 'string',
  'result': {},
  'subMsg': 'string',
  'subMsgCode': 'string'
});

// 获取用户列表
Mock.mock(`${baseURL}/getUserLIst`, {
  'msg': 'string',
  'msgCode': 0,
  'msgDesc': 'string',
  'result': {
    'currentPage': 0,
    'pageSize': 0,
    'resultList': [
      {
        'appId': 0,
        'appName': 'string',
        'approvalNumber': 'string',
        'approvalOpinion': 'string',
        'approvalTime': 0,
        'creatTime': 0,
        'id': 0,
        'state': 0
      }
    ],
    'totalSize': 0
  },
  'subMsg': 'string',
  'subMsgCode': 'string'
});
