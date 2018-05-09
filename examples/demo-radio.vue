<template>
  <div>
    <p>选择的值：{{checked}}</p>
    <Radio
      v-model="checked"
      :value="'选项1的值'"
      :checked="checked"
      :disabled="false"
      :text="'选项1的文本'">
    </Radio>

    <br><br>

    <Radio
      v-model="checked"
      :value="'选项2的值'"
      :checked="checked"
      :disabled="false"
      :text="'选项2的文本'">
    </Radio>

    <br><br>

    <Radio
      v-model="checked"
      :value="'选项3的值'"
      :checked="checked"
      :disabled="false"
      :text="'选项3的文本'">
    </Radio>
  </div>
</template>

<script>
  import Radio from '../src/components/radio/main.vue';

  export default {
    name: 'DemoRadio',
    components: {Radio},
    data() {
      return {
        checked: '选项2的值---'
      };
    }
  };
</script>

<style lang="scss" scoped>
  div{
    padding: 50px;
  }
</style>
