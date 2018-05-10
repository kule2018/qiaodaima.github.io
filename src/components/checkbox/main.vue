<template>
  <label class="checkbox-item">
    <input checked disabled type="checkbox" name="defaultName">
    <i class="icon"></i>
    <span>复选框</span>
  </label>
</template>

<script>
  export default {
    name: 'Checkbox'
  };
</script>

<style lang="scss" scoped>
  .checkbox-item {
    position: relative;
    font-size: 0;

    input[type="checkbox"] {
      position: absolute;
      left: 0;top: 0;
      width: 100%; height: 100%;
      opacity: 0;

      &:disabled {
        & + i {
          background: #f8f4f4;
        }
      }
      &:checked {
        & + i {
          border-color: #409eff;
          background: #409eff;

          &:after {
            position: absolute; content: "\e61d";
            left: 50%; top: 50%;
            font-family: "iconfont" !important;
            font-size: 14px;
            color: #fff;
            transform: translate(-50%, -50%);
          }
        }
        &:disabled + i {
          background: #f5f7fa;
          border-color: #c0c4cc;

          &:after {
            color: #c0c4cc;
          }
        }
      }
    }
    i {
      position: relative;
      width: 14px; height: 14px;
      margin-right: 6px;
      border: 1px solid #9c9c9c;
      border-radius: 2px;
      vertical-align: middle;
    }
    span {
      line-height: 1;
      font-size: 14px;
      vertical-align: middle;
    }
  }
</style>
