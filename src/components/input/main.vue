<template>
  <div class="input-item">
    <input
      :value="value"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @input="input">
    <i v-show="value" @click="clearvalue" class="btn-clear iconfont icon-error"></i>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      maxlength: {
        type: Number,
        default: 20
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clearvalue() {
        this.$emit('input', '');
      },
      input(event) {
        this.$emit('input', event.target.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .input-item {
    position: relative;

    input {
      display: block;
      padding: 0 10px;
      width: 100%; height: 34px;
      border: 1px solid #ddd;
      border-radius: 4px;

      &:disabled {
        background: #f4f4f4;

        & + .btn-clear {
          display: none;
        }
      }
    }
    .btn-clear {
      position: absolute;
      top: 50%;right: 10px;
      transform: translate(0, -50%);
      color: #ccc;
      cursor: pointer;
    }
  }
</style>
