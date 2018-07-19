import Mock from 'mockjs';

const baseURL = 'http://www.wahaha.com';

// 用户登入
Mock.mock(`${baseURL}/login`, {
  'msg': 'im msg',
  'msgCode': 200,
  'msgDesc': 'im msgDesc',
  'result': {
    'avatar': 'aaabbcc',
    'userName': '@cname',
    'token': 'string',
    'userNumber|1': [66208688, 66071007, 66145044, 66889932],
    'email': '@email',
    'mobile': '@mobile',
    'nickName': '@name',
    'sex|1': [0, 1]
  },
  'subMsg': 'im subMsg',
  'subMsgCode': 'im subMsgCode'
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
