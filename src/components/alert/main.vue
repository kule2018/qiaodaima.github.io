<template>
  <div v-show="show" :class="theme" class="alert-item">
    <i :class="icon" class="icon iconfont"></i>
    <dl v-if="title.length || subTitle.length" class="content">
      <dt v-if="title.length">{{title}}</dt>
      <dd v-if="subTitle.length">{{subTitle}}~</dd>
    </dl>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: 'info'
      },
      icon: {
        type: String,
        default: 'icon-error'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
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
    watch: {
      show(newValue) {
        const _this = this;

        if(newValue) {
          setTimeout(function() {
            _this.$emit('input', false);
          }, 3000);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .alert-item {
    z-index: 10;
    position: fixed;
    top: 20px; left: 50%;
    padding: 10px 20px 10px 50px;
    min-height: 40px;
    border-radius: 6px;
    font-size: 12px;
    transform: translate(-50%, 0);

    &.info {
      border: 1px solid #d5e8fc;
      background-color: #eaf4fe;

      .icon {
        color: #2d8cf0;
      }
    }
    &.success {
      border: 1px solid #d1f2e1;
      background-color: #e8f9f0;

      .icon {
        color: #19be6b;
      }
    }
    &.warning {
      border: 1px solid #ffebcc;
      background-color: #fff5e6;

      .icon {
        color: #f90;
      }
    }
    &.error {
      border: 1px solid #fbd9d0;
      background-color: #fdece8;

      .icon {
        color: #ed3f14;
      }
    }

    .icon {
      position: absolute;
      left: 15px; top: 50%;
      font-size: 20px;
      transform: translate(0, -50%);
    }
  }
</style>
