<template>
  <div>TestAxios</div>
</template>

<script>
  import {login} from '../src/api/main.js';

  export default {
    name: 'TestAxios',
    mounted() {
      console.log(66);
      login(function(result) {
        console.log(result);
      });
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
