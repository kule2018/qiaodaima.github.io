<template>
  <div class="textarea-item">
    <textarea
      v-model="valueCopy"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled">
    </textarea>
    <i v-show="value" @click="clearvalue" class="btn-clear iconfont icon-error"></i>
    <div class="num-words-tips">
      <span class="count">{{valueCopy.length}}</span>
      <em class="branch">&#8260;</em>
      <span class="total">{{maxlength}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 1000
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      rows: {
        type: Number,
        default: 5
      }
    },
    computed: {
      valueCopy: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      clearvalue() {
        this.$emit('input', '');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .textarea-item {
    position: relative;

    textarea {
      display: block;
      padding: 5px 25px 25px 10px;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      resize: vertical;

      &:disabled {
        color: #999;
        background: #f4f4f4;

        & ~ .btn-clear,
        & ~ .num-words-tips {
          display: none;
        }
      }
    }
    .btn-clear {
      position: absolute;
      top: 10px;right: 10px;
      color: #ccc;
      cursor: pointer;
    }
    .num-words-tips {
      position: absolute;
      right: 10px;bottom: 10px;
      font-size:12px;
      color:#e1e1e1;
    }
  }
</style>
