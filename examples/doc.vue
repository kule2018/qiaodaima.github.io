<template>
  <div class="doc-content">
    <h1>基础组件文档说明</h1>

    <DocItem>
      <div slot="tip">说明性的文字</div>
      <div slot="example">外部引入的组件示例</div>
    </DocItem>
  </div>
</template>

<script>
  import DocItem from './doc-item.vue';

  export default {
    name: 'Doc',
    components: {
      DocItem
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
    font-size: 28px;
    color: #409eff;
  }
  .doc-content {
    margin: 0 auto;
    padding: 20px;
    width: 1200px;

    .doc-item {
      margin-bottom: 20px;;
      padding: 20px;
      border: 1px dashed #eee;
      border-radius: 6px;
      transition: all 0.5s;

      &:hover {
        border-color: transparent;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>
