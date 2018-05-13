<template>
  <DocItem :title="'Transfer 穿梭框'" :param="param">
    <div slot="tip">
      目前还没写好哦~
    </div>

    <template slot="example">
      <Transfer></Transfer>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Transfer from '../src/components/transfer/main.vue';

  export default {
    name: 'DocTransfer',
    components: {
      DocItem,
      Transfer
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
  //
</style>
