<template>
  <div class="dialog-item">
    <div class="header">
      <span class="title-text">标题的文字</span>
      <i class="btn-close"></i>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="tool-wrap">
      <a class="" href="javascript:;">默认按钮</a>
      <a class="primary" href="javascript:;">主要按钮</a>
      <a class="danger" href="javascript:;">危险按钮</a>
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
    transform: translate(-50%, -50%);

    & > *{
      background: #fff;
    }
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

      .title-text{
        max-width: 95%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
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
      position: relative;
      min-height: 400px;
      max-height: 600px;
      overflow-y: auto;
    }
    .tool-wrap {
      position: relative;
      padding: 15px;
      border-top: solid 1px red;
      font-size: 0;
      text-align: right;

      a {
        margin-left: 10px;
        padding: 5px 15px;
        border: 1px solid #ddd;
        border-radius: 2px;
        font-size: 12px;

        &:first-child {
          margin-left: 0;
        }
        &.primary{
          color: #fff;
          border-color: #0079ff;
          background: #0079ff;
        }
        &.danger{
          color: #fff;
          border-color: #ff5e5e;
          background: #ff5e5e;
        }
      }
    }
  }
</style>
