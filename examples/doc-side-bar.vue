<template>
  <DocItem
    :title="'SideBar 侧边弹窗'"
    :param="param"
    :tools="tools">
    <div slot="tip">
      侧边栏顶部可以使用分发槽 slot="header" 来自定义内容, 此时建议 title字段都传递空值来避免干扰界面布局<br>
      主体自定义内容使用分发槽 slot="content" 来控制，<br>
      buttons 字段的默认值为 确认 和 取消 两个按钮，文档中的默认值仅仅是数据格式（表格太小，展示字段有限）
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
            name: 'v-model',
            explain: '控制侧边栏的显示与隐藏，值是双向绑定的',
            type: 'Boolean',
            default: 'false',
            isMust: false
          },
          {
            name: 'title',
            explain: '对话框标题，长度太长会自动截取。若不需要小图标，对应参数不传递即可',
            type: 'Object',
            default: {
              icon: '-',
              text: '侧边栏标题'
            },
            isMust: false
          },
          {
            name: 'buttons',
            explain: '底部按钮,主题有三种可选 默认、primary、danger，默认提供两个按钮，确认和取消',
            type: 'Array',
            default: [
              {
                flag: '',
                theme: '',
                text: ''
              }
            ],
            isMust: false
          }
        ],
        tools: [
          {
            flag: '',
            text: '显示侧边弹窗'
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
