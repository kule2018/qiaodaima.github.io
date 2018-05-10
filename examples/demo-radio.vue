<template>
  <div>
    <p>选择的值：{{value}}</p>
    <Radio v-model="value" :label="'选项1的值'"></Radio>
    <Radio v-model="value" :label="'选项2的值'"></Radio>
    <Radio v-model="value" :label="'选项3的值'" :disabled="true"></Radio>
    <Radio v-model="value" :label="'选项4的值'" :disabled="true"></Radio>
  </div>
</template>

<script>
  import Radio from '../src/components/radio/main.vue';

  export default {
    name: 'DemoRadio',
    components: {Radio},
    data() {
      return {
        value: '选项3的值'
      };
    }
  };
</script>

<style lang="scss" scoped>
  div{
    padding: 50px;
  }
</style>
