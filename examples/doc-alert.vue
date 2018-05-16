<template>
  <DocItem
    :title="'Alert 提示'"
    :param="param"
    :tools="tools"
    @callbacktool="callbacktool">
    <div slot="tip">
      如果默认排版不满足您的需求，您也可以使用分发槽 slot="content" 来自定义内容，
      此时建议title subTitle都传递为空，避免干扰您的排版,
    </div>

    <template slot="example">
      <Alert
        v-model="infoValue"
        :theme="'info'"
        :icon="'icon-busy'">
        <a slot="content" href="https://github.com/qiaodaima/vue-base-ui">这个是自定义提示内容</a>
      </Alert>

      <Alert
        v-model="successValue"
        :theme="'success'"
        :icon="'icon-success'"
        :title="'成功提示'"
        :subTitle="'某程序员说：“Apple是美工写代码，Google是码农做美工。”'">
      </Alert>

      <Alert
        v-model="warningValue"
        :theme="'warning'"
        :title="'警告提示'"
        :subTitle="'生活不仅只是敲代码，还有……调bug。'">
      </Alert>

      <Alert
        v-model="errorValue"
        :theme="'error'"
        :icon="'icon-error'"
        :title="'错误提示'"
        :subTitle="'编程夜当午，手握小滑鼠。谁知编程辛，行行皆“心”苦；头昏不觉晓，使劲揉眼角。夜夜太辛苦，睡眠知多少'">
      </Alert>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import Alert from '../src/components/alert/main.vue';

  export default {
    name: 'DocAlert',
    components: {
      DocItem,
      Alert
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '控制显示 与 隐藏，值是双向绑定的',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'icon',
            explain: '左侧小图标的类名',
            type: 'String',
            default: 'icon-error',
            isMust: false
          },
          {
            name: 'theme',
            explain: '提示类型，可选择 info、success、warning、error',
            type: 'String',
            default: 'info',
            isMust: false
          },
          {
            name: 'title',
            explain: '提示语的大标题',
            type: 'String',
            default: '\'\'',
            isMust: false
          },
          {
            name: 'subTitle',
            explain: '提示语的正文内容',
            type: 'String',
            default: '\'\'',
            isMust: false
          }
        ],
        tools: [
          {
            flag: 'info',
            text: '信息提示'
          },
          {
            flag: 'success',
            text: '成功提示'
          },
          {
            flag: 'warning',
            text: '警告提示'
          },
          {
            flag: 'error',
            text: '错误提示'
          }
        ],
        infoValue: false,
        successValue: false,
        warningValue: false,
        errorValue: false
      };
    },
    methods: {
      callbacktool(resutl) {
        switch(resutl.flag) {
          case 'info':
            this.infoValue = true;
            break;
          case 'success':
            this.successValue = true;
            break;
          case 'warning':
            this.warningValue = true;
            break;
          case 'error':
            this.errorValue = true;
            break;
          default:
            break;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .alert-item {
    a {
      text-decoration: underline;
    }
  }
</style>
