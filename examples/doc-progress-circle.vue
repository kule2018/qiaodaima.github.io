<template>
  <DocItem
    :title="'ProgressCircle 进度环'"
    :param="param">
    <div slot="tip">
      目前处于测试阶段...
    </div>

    <template slot="example">
      <progress-circle></progress-circle>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import ProgressCircle from '../src/components/progress-circle/main.vue';

  export default {
    name: 'DocProgressCircle',
    components: {
      DocItem,
      ProgressCircle
    },
    data() {
      return {
        param: [
          {
            name: 'size',
            explain: '图表的宽度和高度，即圆圈的半径，单位px',
            type: 'Number',
            default: 120,
            isMust: false
          },
          {
            name: 'percent',
            explain: '即高亮环的长度，%模式',
            type: 'Number',
            default: 0,
            isMust: false
          },
          {
            name: 'width',
            explain: '环的宽度，单位px',
            type: 'Number',
            default: 5,
            isMust: false
          },
          {
            name: 'trail-color',
            explain: '进度环背景的颜色，即暗色环的背景颜色',
            type: 'String',
            default: '#eaeef2',
            isMust: false
          },
          {
            name: 'stroke-color',
            explain: '进度环的颜色，即高亮环的背景颜色',
            type: 'String',
            default: '#2db7f5',
            isMust: false
          },
          {
            name: 'slot="content"',
            explain: '自定义显示中间内容，内容默认垂直居中',
            type: '-',
            default: '-',
            isMust: '-'
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
