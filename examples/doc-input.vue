<template>
  <DocItem :title="'Input 输入框'" :param="param">
    <div slot="tip">数据是双向绑定的。默认表现为块级元素样式，即宽度占据一整行</div>

    <template slot="example">
      <Input v-model="value" :maxlength="10" />
      <Input v-model="value" :placeholder="'请输入密码'" :type="'password'" />
      <Input v-model="value" :disabled="true" />
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Input from '../src/components/input/main.vue';

  export default {
    name: 'DocInput',
    components: {
      DocItem,
      Input
    },
    data() {
      return {
        value: '输入框的值',
        param: [
          {
            name: 'v-model',
            explain: '输入框的值',
            type: 'String',
            default: '-',
            isMust: true
          },
          {
            name: 'placeholder',
            explain: '填写输入字段的提示',
            type: 'String',
            default: '请输入',
            isMust: false
          },
          {
            name: 'maxlength',
            explain: '输入字段的最大长度',
            type: 'Number',
            default: 20,
            isMust: false
          },
          {
            name: 'type',
            explain: '输入框的类型, 只能改成 email、number、password诸如此类，不可选择 checkbox、button此类',
            type: 'String',
            default: 'text',
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用输入框',
            type: 'Boolean',
            default: false,
            isMust: false
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .input-item {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
</style>
