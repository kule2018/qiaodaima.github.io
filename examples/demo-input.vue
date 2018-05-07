<template>
  <div>
    <h1>输入框</h1>
    <div style=" margin: 20px; padding: 20px; border:1px solid red;">
      外部：
      <input v-model="kkk" type="text">
    </div>

    <my-input v-model="kkk" :disabled="false"></my-input>
  </div>
</template>

<script>
  import Input from '../src/components/input/main.vue';

  export default {
    name: 'DemoInput',
    components: {myInput: Input},
    data() {
      return {
        kkk: '7878',
        modeData: {
          display: true
        }
      };
    },
    methods: {
      //
    }
  };
</script>

<style>
  h1{
    text-align: center;
    color: #409eff;
  }
</style>
