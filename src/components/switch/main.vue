<template>
  <label class="switch-item">
    <input type="checkbox">
    <span class="inner-text">开</span>
  </label>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '复选框文案'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .switch-item {
    position: relative;
    cursor: pointer;

    input[type="checkbox"] {
      z-index: 10;
      position: absolute;
      left: 0; top: 0;
      width: 100%; height: 100%;
      opacity: 0;

      &:active {
        .inner-text {
          &:after {
            width: 22px;
          }
        }
      }
      &:checked {
        & ~ .inner-text {
          text-align: left;
          background: #409eff;

          &:after {
            left: calc(100% - 2px);
            transform: translate(-100%, 0);
          }
        }
      }
    }
    .inner-text {
      position: relative;
      padding: 0 5px;
      width: 44px; height: 22px;
      line-height: 22px;
      color: #fff;
      text-align: right;
      font-size: 12px;
      border-radius: 22px;
      background: #ccc;
      transition: all .2s;

      &:after {
        position: absolute; content: "";
        left: 2px; top: 2px; bottom: 2px; right: auto;
        width: 18px;
        border-radius: 50%;
        background: #fff;
        transition: all .2s;
      }
    }
  }
</style>
