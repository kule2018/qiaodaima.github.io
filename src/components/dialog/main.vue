<template>
  <div v-show="show" @click="shadeCloseFn" class="dialog-wrap">
    <div class="mask"></div>
    <div @click.stop="" class="dialog-item">
      <div class="header">
        <i v-if="title.icon" :class="title.icon" class="iconfont"></i>
        <span class="title-text">{{title.text}}</span>
        <i @click="closeDialog" class="btn-close"></i>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="tool-wrap">
        <a
          v-for="(button, index) in buttons"
          @click="callback(button);"
          :class="button.theme"
          :key="index"
          href="javascript:;">
          {{button.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      value: {
        type: Boolean,
        default: true
      },
      shadeClose: {
        type: Boolean,
        default: false
      },
      title: {
        type: Object,
        default() {
          return {
            icon: 'icon-home',
            text: '对话框标题'
          };
        }
      },
      buttons: {
        type: Array,
        default() {
          return [
            {
              flag: '',
              theme: '', // 默认、primary、danger
              text: '默认按钮'
            }
          ];
        }
      }
    },
    computed: {
      show: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      closeDialog() {
        this.$emit('closedialog', null);
        this.show = false;
      },
      shadeCloseFn() {
        if(this.shadeClose) {
          this.$emit('input', false);
        }
      },
      callback(result) {
        this.$emit('callback', result);
        console.log(result);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dialog-wrap {
    z-index: 500;
    position: fixed;
    left: 0;right: 0;top: 0;bottom: 0;
  }
  .mask {
    position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .dialog-item {
    position: absolute;
    left: 50%; top: 50%;
    width: 720px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);
    transform: translate(-50%, -50%);
    background: #fff;

    .header {
      position: relative;
      padding: 10px;
      border-bottom: solid 1px #eee;

      .title-text {
        max-width: 95%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        vertical-align: middle;
      }
      .btn-close {
        position: absolute;
        right: 10px; top: 50%;
        line-height: 1;
        font-size: 16px;
        transform: translate(0, -50%);
        cursor: pointer;

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
      max-height: 450px;
      overflow-y: auto;
    }
    .tool-wrap {
      position: relative;
      padding: 15px;
      font-size: 0;
      text-align: right;

      a {
        margin-left: 10px;
        padding: 5px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;

        &:hover{
          opacity: 0.85;
        }
        &:first-child {
          margin-left: 0;
        }
        &.primary {
          color: #fff;
          border-color: #0079ff;
          background: #0079ff;
        }
        &.danger {
          color: #fff;
          border-color: #ff5e5e;
          background: #ff5e5e;
        }
      }
    }
  }
</style>
