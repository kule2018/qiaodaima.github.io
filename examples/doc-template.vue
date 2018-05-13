<template>
  <DocItem :title="'xxx xxx'" :param="param">
    <div slot="tip">
      <!--  -->
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：</dt>
        <dd>
          <!--  -->
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import xxx from '../src/components/xxx/main.vue';

  export default {
    name: 'Docxxx',
    components: {
      DocItem,
      xxx
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
        ],
        tools: [
          {
            flag: '',
            text: '示例操作1'
          }
        ]
      };
    },
    methods: {
      //
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
