<template>
  <div>
    <p>选择的值</p>
    <Radio v-model="currValue" :label="true"></Radio>
    <Radio v-model="currValue" :label="false"></Radio>
  </div>
</template>

<script>
  import Radio from '../src/components/radio/main.vue';

  export default {
    name: 'DemoRadio',
    components: {Radio},
    data() {
      return {
        currValue: '被选择的值哦'
      };
    }
  };
</script>

<style lang="scss" scoped>
  div{
    padding: 50px;
  }
</style>
