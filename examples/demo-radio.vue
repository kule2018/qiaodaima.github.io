<template>
  <div>
    <div>
      <input type="radio" id="one" :value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" :value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <Loading v-model="modeData1.value" v-bind="modeData1"></Loading>{{modeData1.checked}}
    <Loading v-model="modeData2.value" v-bind="modeData2"></Loading>{{modeData2.checked}}
    <Loading v-model="modeData3.value" v-bind="modeData3"></Loading>{{modeData3.checked}}
  </div>
</template>

<script>
  import Loading from '../src/components/radio/main.vue';

  export default {
    name: 'DemoLoading',
    components: {Loading},
    data() {
      return {
        picked: '',
        modeData1: {
        name: 'ceshi',
        value: '苹果的值',
        checked: true,
        disabled: false,
        text: '苹果'
        },
        modeData2: {
          name: 'ceshi',
          value: '香蕉的值',
          checked: false,
          disabled: false,
          text: '香蕉'
        },
        modeData3: {
          name: 'ceshi',
          value: '橘子的值',
          checked: false,
          disabled: false,
          text: '橘子'
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
