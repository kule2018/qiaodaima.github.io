<template>
  <div>
    <h1>对话框</h1>
    <Dialog></Dialog >
  </div>
</template>

<script>
  import Dialog  from '../src/components/dialog/main.vue';

  export default {
    name: 'DemoDialog',
    components: {Dialog},
    data() {
      return {

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
