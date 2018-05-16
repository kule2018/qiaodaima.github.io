<template>
  <DocItem :title="'Textarea 多行文本'" :param="param">
    <div slot="tip">
      默认表现为块级元素样式，即占据一整行,默认禁止左右拉伸
    </div>

    <template slot="example">
      <Textarea></Textarea>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Textarea from '../src/components/textarea/main.vue';

  export default {
    name: 'DocTextarea',
    components: {
      DocItem,
      Textarea
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
      //
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
