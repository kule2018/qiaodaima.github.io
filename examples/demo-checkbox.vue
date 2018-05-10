<template>
  <div>
    <Checkbox></Checkbox>
  </div>
</template>

<script>
  import Checkbox from '../src/components/checkbox/main.vue';

  export default {
    name: 'DemoCheckbox',
    components: {Checkbox}
  };
</script>

<style lang="scss" scoped>
  div{
    padding: 50px;
  }
</style>
