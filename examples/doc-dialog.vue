<template>
  <DocItem :title="'Dialog 对话框'" :tools="tools" :param="param">
    <div slot="tip">
      <!--  -->
    </div>

    <template slot="example">
      <Dialog>
        <div slot="content">自定义内容放在这边</div>
      </Dialog>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Dialog from '../src/components/dialog/main.vue';

  export default {
    name: 'DocDialog',
    components: {
      DocItem,
      Dialog
    },
    data() {
      return {
        param: [
          {}
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
