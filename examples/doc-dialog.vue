<template>
  <DocItem
    :title="'Dialog 对话框'"
    :tools="tools"
    :param="param"
    @callbacktool="callbacktool">
    <div slot="tip">
      对话框的显示与隐藏(v-model)字段是双向绑定的，其余字段都是单项绑定。对话框的主体部分不含任何 padding margin<br>
      自定义内容使用分发槽 slot="content" 来控制，当主体部分超过一定高度时会出现滚动条 <br>
      buttons 字段中的 text 字段是必须的，其余字段都是可选的，建议给按钮传递一个flag字段，
      用于标识点击了哪个按钮，而不是用text字段来标识(这么做显得很low~) <br>
      callback 回调事件返回的当前按钮对象格式取决于buttons字段的定义，
    </div>

    <template slot="example">
      <Dialog v-model="modelData.show" v-bind="modelData">
        <div style="height: 1000px;" slot="content">
          <p v-for="(n, index) in 100" :key="index">自定义内容{{n}}</p>
        </div>
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
          {
            name: 'v-model',
            explain: '是否显示对话框，双向绑定',
            type: 'Boolean',
            default: true,
            isMust: false
          },
          {
            name: 'shadeClose',
            explain: '点击遮罩是否关闭对话框',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'title',
            explain: '对话框标题，长度太长会自动截取。若不需要小图标，对应参数不传递即可',
            type: 'Object',
            default: {
              icon: 'icon-home',
              text: '对话框标题'
            },
            isMust: false
          },
          {
            name: 'buttons',
            explain: '底部按钮,主题有三种可选 默认、primary、danger',
            type: 'Array',
            default: [
              {
                flag: '',
                theme: '',
                text: '默认按钮'
              }
            ],
            isMust: false
          },
          {
            name: 'closedialog',
            explain: '标题右侧关闭弹窗回调事件，无附带数据',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'callback',
            explain: '底部按钮点击回调事件，附带当前按钮对象',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ],
        tools: [
          {
            flag: 'showDialog',
            text: '显示对话框'
          }
        ],
        modelData: {
          show: false,
          shadeClose: true,
          buttons: [
            {
              flag: 'cancel',
              theme: '',
              text: '取消'
            },
            {
              flag: 'del',
              theme: 'danger',
              text: '删除'
            },
            {
              flag: 'ok',
              theme: 'primary',
              text: '确认'
            }
          ]
        }
      };
    },
    methods: {
      showDialog() {
        this.modelData.show = true;
      },
      callbacktool(resutl) {
        switch(resutl.flag) {
          case 'showDialog':
            this.showDialog();
            break;
          default:
            break;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
