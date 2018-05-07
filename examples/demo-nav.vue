<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="nav-list">
      <a href="#/demo-loading">loading加载动画</a>
      <a href="#/demo-checkbox">复选框</a>
      <a href="#/demo-radio">单选按钮</a>
      <a href="#/demo-input">输入框</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DemoNav',
    data() {
      return {
        msg: '导航测试'
      };
    }
  }
</script>

<style lang="scss" scoped>
  h1{
    margin-bottom: 30px;
    padding: 10px 0;
    text-align: center;
  }
  .nav-list{
    margin: 0 auto;
    width: 80%;
    font-size: 0;

    a{
      padding: 10px 0;
      width: 20%;
      color: #409eff;
      font-size: 14px;
      text-decoration: underline;
    }
  }
</style>
