<template>
  <DocItem :title="'SideBar 侧边弹窗'" :param="param">
    <div slot="tip">
      侧边栏顶部可以使用分发槽 slot="header" 来自定义内容
    </div>

    <template slot="example">
      <SideBar></SideBar>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import SideBar from '../src/components/side-bar/main.vue';

  export default {
    name: 'DocSideBar',
    components: {
      DocItem,
      SideBar
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
