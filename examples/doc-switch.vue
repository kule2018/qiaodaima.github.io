<template>
  <DocItem
    :title="'Switch 开关'"
    :param="param">
    <div slot="tip">
      在两种状态间切换时用到的开关选择器
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：</dt>
        <dd>
          <kkk v-model="value1"></kkk>
        </dd>
      </dl>
      <dl class="group">
        <dt>禁用：</dt>
        <dd>
          <kkk v-model="value2" :text="['ON', 'OFF']" :disabled="true"></kkk>
        </dd>
      </dl>
      <dl class="group">
        <dt>禁用：</dt>
        <dd>
          <kkk v-model="value3" :text="['ON', 'OFF']" :disabled="true"></kkk>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import kkk from '../src/components/switch/main.vue';

  export default {
    name: 'Docxxx',
    components: {
      DocItem,
      kkk
    },
    data() {
      return {
        value1: true,
        value2: true,
        value3: false,
        param: [
          {
            name: 'v-model',
            explain: 'switch按钮最终选择的值',
            type: 'Boolean',
            default: true,
            isMust: true
          },
          {
            name: 'disabled',
            explain: '是否禁用switch按钮',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'text',
            explain: 'switch按钮两侧的文字；数组长度为2，超出无效',
            type: 'Array',
            default: ['开', '关'],
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
</style>
