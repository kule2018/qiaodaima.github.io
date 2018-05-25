<template>
  <DocItem :title="'Radio 单选按钮'" :param="param">
    <div slot="tip">
      数据是双向绑定的。默认表现为行内元素样式，建议给name字段赋值，<br>
      禁用状态只是表明该选项不可以被选择，如果已被选中，并且是禁用状态，其还是有可能成为未选中状态，这并不矛盾
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：{{fruit}}</dt>
        <dd>
          <Radio v-model="fruit" :label="'选中苹果'" :disabled="true" :text="'苹果'" :name="'fruit'"></Radio>
          <Radio v-model="fruit" :label="'选中香蕉'" :text="'香蕉'" :name="'fruit'"></Radio>
          <Radio v-model="fruit" :label="'选中橘子'" :text="'橘子'" :name="'fruit'"></Radio>
        </dd>
      </dl>

      <dl class="group">
        <dt>当前值：{{subject}}</dt>
        <dd>
          <Radio v-model="subject" :label="1" :text="'vue'" :name="'subject'"></Radio>
          <Radio v-model="subject" :label="2" :text="'react'" :name="'subject'"></Radio>
          <Radio v-model="subject" :label="3" :text="'angularjs'" :name="'subject'"></Radio>
        </dd>
      </dl>

      <dl class="group">
        <dt>当前值：{{sex}}</dt>
        <dd>
          <Radio v-model="sex" :label="true" :text="'男'" :name="'sex'"></Radio>
          <Radio v-model="sex" :label="false" :text="'女'" :name="'sex'"></Radio>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Radio from '../src/components/radio/main.vue';

  export default {
    name: 'DocRadio',
    components: {
      DocItem,
      Radio
    },
    data() {
      return {
        fruit: '选中苹果',
        subject: 2,
        sex: false,
        param: [
          {
            name: 'v-model',
            explain: '单选按钮最终选择的值',
            type: 'String, Number, Boolean',
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
            explain: '原生name属性，相同name属性的单选按钮视为一组',
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
            explain: '单选按钮文案',
            type: 'String',
            default: '单选按钮文案',
            isMust: false
          },
          {
            name: 'on-change',
            explain: '在选项状态发生改变时触发，返回原生事件对象',
            type: '-',
            default: '-',
            isMust: '-'
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
  .radio-item {
    margin-left: 15px;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
