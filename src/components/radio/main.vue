<template>
  <label @click="callback" class="radio-item disabled">
    <input :name="name" disabled type="radio">
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
      text: {
        type: String,
        default: '单选按钮'
      }
    },

    // computed: {
    //   valueCopy() {
    //     // return value;
    //   }
    // },
    methods: {
      callback() {
        this.$emit('callback', '测试数据');
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
          border-color: #e4e7ed;

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
      border: 1px solid #dcdfe6;
      border-radius: 50%;
      vertical-align: middle;

      &:hover{
        border-color: #409eff;
      }
    }
    span{
      font-size: 14px;
      vertical-align: middle;
    }
  }
</style>
