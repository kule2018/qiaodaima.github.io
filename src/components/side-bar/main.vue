<template>
  <div class="side-bar-item">
    <div class="header">
      <i v-if="title.icon" :class="title.icon" class="iconfont"></i>
      <span class="title-text">{{title.text}}</span>
    </div>
    <div class="content">00</div>
    <div class="footer">
      <a
        v-for="(button, index) in buttons"
        @click="onButtons(button);"
        :class="button.theme"
        :key="index"
        href="javascript:;">
        {{button.text}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      value: {
        type: Boolean,
        default: true
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
            },
            {
              flag: '',
              theme: 'primary', // 默认、primary、danger
              text: '默认按钮'
            },
            {
              flag: '',
              theme: 'danger', // 默认、primary、danger
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
      onButtons(button) {
        this.$emit('on-buttons', button);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-bar-item {
    z-index: 10;
    position: fixed;
    right: 30px; top: 0; bottom: 0;
    width: 360px;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);

    .header {
      position: relative;
      padding: 3px 10px;

      .title-text {
        max-width: 95%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        vertical-align: middle;
      }
    }
    .content {
      position: relative;
      height: calc(100% - 88px);
      overflow-y: auto;
    }
    .footer {
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
