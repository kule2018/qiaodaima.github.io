<template>
  <DocItem
    :title="'Switch 开关'"
    :param="param"
    @on-test="onTest">
    <div slot="tip">
      在两种状态间切换时用到的开关选择器
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：</dt>
        <dd>
          <kkk></kkk>
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
        param: [
          {
            name: '-',
            explain: '-',
            type: '-',
            default: '-',
            isMust: false
          }
        ]
      };
    },
    methods: {
      onTest(button) {
        switch(button.flag) {
          case '':
            break;
          default:
            break;
        }
      },
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
      // font-size: 0;
    }
  }
</style>
