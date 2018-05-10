<template>
  <div>
    <p>选择的值：{{value}}</p>
    <Checkbox v-model="value" :label="'选项1的值'"></Checkbox>
    <Checkbox v-model="value" :label="'选项2的值'"></Checkbox>
    <Checkbox v-model="value" :label="'选项3的值'"></Checkbox>
  </div>
</template>

<script>
  import Checkbox from '../src/components/checkbox/main.vue';

  export default {
    name: 'DemoCheckbox',
    components: {Checkbox},
    data() {
      return {
        value: ['选项2的值']
      };
    }
  };
</script>

<style lang="scss" scoped>
  div{
    padding: 50px;
  }
</style>
