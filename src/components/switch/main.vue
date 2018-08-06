<template>
  <label class="switch-item">
    <input
      :disabled="disabled"
      @change="onChange"
      type="checkbox"
    >
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
        type: Array,
        default: function () {
          return ['开', '关']
        }
      }
    },
    methods: {
      onChange(event) {
        this.$emit('on-change', event);
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
      $height: 22px;

      position: relative;
      padding: 0 10px;
      width: 50px; height: $height;
      line-height: $height;
      color: #fff;
      text-align: right;
      font-size: 12px;
      border-radius: $height;
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
