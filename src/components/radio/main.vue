<template>
  <label class="radio-item">
    <input
      :name="name"
      :disabled="disabled"
      :value="value"
      :checked="checked"
      @change="input"
      type="radio">
    <i class="icon"></i>
    <span>{{text}}</span>
  </label>
</template>

<script>
  export default {
    name: 'Radio',
    props: {
      name: {
        type: String,
        default: 'default-name'
      },
      value: {
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '单选按钮'
      }
    },
    methods: {
      input(event) {
        this.$emit('input', event.target.checked);
        console.log(event.target.checked);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .radio-item{
    position: relative;
    font-size: 0;

    input[type="radio"]{
      position: absolute;
      left: 0;top: 0;
      width: 100%; height: 100%;
      opacity: 0;

      &:disabled{
        & + i{
          background: #f8f4f4;
        }
      }
      &:checked{
        & + i{
          border-color: #409eff;
          background: #409eff;

          &:after{
            position: absolute; content: '';
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            width: 4px; height: 4px;
            border-radius: 50%;
            background: #fff;
          }
        }
        &:disabled + i{
          background: #f5f7fa;
          border-color: #c0c4cc;

          &:after{
            background: #c0c4cc;
          }
        }
      }
    }
    i{
      position: relative;
      width: 14px; height: 14px;
      margin-right: 5px;
      border: 1px solid #9c9c9c;
      border-radius: 50%;
      vertical-align: middle;
    }
    span{
      font-size: 14px;
      vertical-align: middle;
    }
  }
</style>
