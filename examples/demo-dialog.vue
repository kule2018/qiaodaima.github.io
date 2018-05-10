<template>
  <div>
    <h1>对话框</h1>
    <Dialog>
      <div slot="content" style="padding: 20px;">测试内容</div>
    </Dialog >
  </div>
</template>

<script>
  import Dialog  from '../src/components/dialog/main.vue';

  export default {
    name: 'DemoDialog',
    components: {Dialog},
    data() {
      return {
        show: true
      };
    },
    methods: {

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
