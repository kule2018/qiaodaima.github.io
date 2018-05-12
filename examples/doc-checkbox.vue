<template>
  <DocItem :title="'Checkbox 复选框'" :param="param">
    <div slot="tip">
      vue的Checkbox操作，其实是将当前选项的值(label) 与 v-model绑定的值进行匹配，<br>
      如果label的值 在 v-model中，则该选项被选中，否则未被选中，因此v-model值的类型 必须是数组类型 <br>
      建议给name字段赋值，以便于区分标识
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：{{hobby}}</dt>
        <dd>
          <Checkbox v-model="hobby" :label="'游泳的值'" :text="'游泳'"></Checkbox>
          <Checkbox v-model="hobby" :label="'踢球的值'" :text="'踢球'"></Checkbox>
          <Checkbox v-model="hobby" :label="'下象棋的值'" :text="'下象棋'"></Checkbox>
          <Checkbox v-model="hobby" :label="'写代码的值'" :text="'写代码'" :disabled="true"></Checkbox>
          <Checkbox v-model="hobby" :label="'学习的值'" :text="'学习'"></Checkbox>
          <Checkbox v-model="hobby" :label="'加班的值'" :text="'加班'" :disabled="true"></Checkbox>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Checkbox from '../src/components/checkbox/main.vue';

  export default {
    name: 'DocCheckbox',
    components: {
      DocItem,
      Checkbox
    },
    data() {
      return {
        hobby: ['写代码的值', '学习的值'],
        param: [
          {
            name: 'v-model',
            explain: '复选框选中的值，必须是数组类型',
            type: 'Array',
            default: '-',
            isMust: true
          },
          {
            name: 'label',
            explain: '当前选项的后选值，建议不要重复，此字段的值务必唯一',
            type: 'String, Number, Boolean',
            default: '-',
            isMust: true
          },
          {
            name: 'name',
            explain: '原生name属性，相同name属性的复选框视为一组',
            type: 'String',
            default: 'defaultName',
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用该选项',
            type: 'Boolean',
            default: 'false',
            isMust: false
          },
          {
            name: 'text',
            explain: '复选框文案',
            type: 'String',
            default: '复选框文案',
            isMust: false
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .group {
    display: inline-block;
    margin-left: 100px;
    &:first-child {
      margin-left: 0;
    }
    & > dt {
      margin-bottom: 5px;
      color: #999;
      font-size: 12px;
    }
    & > dd {
      font-size: 0;
    }
  }
  .checkbox-item {
    margin-left: 15px;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
