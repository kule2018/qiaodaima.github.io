<template>
  <div style="padding: 50px;">
    <h1>输入框</h1>

    {{modelData1.value}}
    <my-input v-model="modelData1.value" v-bind="modelData1"></my-input>
    <br>

    {{modelData2.value}}
    <my-input v-model="modelData2.value" v-bind="modelData2"></my-input>
  </div>
</template>

<script>
  import Input from '../src/components/input/main.vue';

  export default {
    name: 'DemoInput',
    components: {myInput: Input},
    data() {
      return {
        modelData1: {
          value: '数据是双向绑定的',
          disabled: false,
          placeholder: '请输入哦'
        },
        modelData2: {
          value: '禁止输入',
          disabled: true,
          placeholder: '请输入哦'
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
