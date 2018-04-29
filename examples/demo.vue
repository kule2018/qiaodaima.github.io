<template>
  <div>
    <h1>loading</h1>
    <button @click="display = truegit">显示</button>
    <button @click="display = false">隐藏</button>

    <Loading :display="display"></Loading>
  </div>
</template>

<script>
  import Loading from '../src/components/loading/main.vue';

  export default {
    name: 'Demo',
    components: { Loading },
    data() {
      return {
        msg: 'hello Vue!',
        display: true
      };
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
