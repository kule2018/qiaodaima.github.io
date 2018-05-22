<template>
  <div>测试</div>
</template>

<script>
  import {login} from '../src/api/main.js';

  export default {
    name: 'Test',
    mounted() {
      console.log('122');
      login();
    }
  };
</script>

<style lang="scss" scoped>
//
</style>
