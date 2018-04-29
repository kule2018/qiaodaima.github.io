<template>
  <div v-if="display" class="loading-item">
    <i :class="[icon]" class="iconfont"></i>
    <span>{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      display: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'icon-loading'
      },
      text: {
        type: String,
        default: '加载中...'
      },
      theme: {
        default: 'kkk'
      }
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .loading-item{
    position: absolute;
    left: 50%; top: 50%;
    padding: 5px 10px;
	  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
	  border-radius: 2px;
    border: solid 1px #dedede;
    font-size: 12px;
    background-color: #fff;
    transform: translate(-50%, -50%);

    i{
      animation: rotate 1s linear 0s infinite normal;
    }
  }
  @keyframes rotate{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
