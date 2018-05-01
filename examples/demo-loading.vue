<template>
  <div>
    <h1>loading</h1>
    <button @click="show();">显示</button>
    <button @click="hide();">隐藏</button>
    <button @click="change();">传递参数</button>

    <Loading v-bind="modeData"></Loading>
  </div>
</template>

<script>
  import Loading from '../src/components/loading/main.vue';

  export default {
    name: 'DemoLoading',
    components: {Loading},
    data() {
      return {
        modeData: {
          display: true
        }
      };
    },
    methods: {
      show() {
        this.modeData.display = true;
      },
      hide() {
        this.modeData.display = false;
      },
      change() {
        this.modeData = {
          display: true,
          text: '请稍等',
          icon: 'icon-xuanzhuan'
        };
      }
    }
  };
</script>

<style>
  h1{
    text-align: center;
    color: #409eff;
  }
  button{
    padding: 2px 10px;
  }
</style>
