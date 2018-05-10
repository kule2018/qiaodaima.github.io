<template>
  <div class="dialog-item">
    <div class="header">
      <span class="title-text">标题的文字</span>
      <i class="btn-close"></i>
    </div>
    <div class="content"></div>
    <div class="tool-wrap">
      <a href="javascript:;">查看处理结果</a>
      <a href="javascript:;">查看处理结果</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dialog'
  };
</script>

<style lang="scss" scoped>
  .dialog-item {
    position: fixed;
    width: 620px;
    left: 50%; top: 50%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);
    background: #fff;
    transform: translate(-50%, -50%);

    &:before {
      z-index: -1;
      position: fixed; content: "";
      left: -9999999px; top: -9999999px; right: -9999999px; bottom: -9999999px;
      background: rgba(0, 0, 0, 0.22);
    }
    .header{
      position: relative;
      padding: 10px;
      border-bottom: solid 1px #f8f8f8;
      background: #fff;

      .title-text{

      }
      .btn-close {
        position: absolute;
        right: 10px; top: 50%;
        line-height: 1;
        font-size: 16px;
        cursor: pointer;
        transform: translate(0, -50%);

        &:before {
          content: "\e60a";
          font-family: "iconfont" !important;
        }
        &:hover {
          color: #ff5e5e;
        }
      }
    }
    .content {
      min-height: 400px;
      background: blue;
      background: #fff;
    }
    .tool-wrap {
      padding: 10px;
      border-top: solid 1px #f8f8f8;
      font-size: 0;
      text-align: right;
      background: #fff;

      a {
        margin-left: 10px;
        padding: 6px 15px;
        border: 1px solid #ddd;
        border-radius: 2px;
        font-size: 12px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
</style>
