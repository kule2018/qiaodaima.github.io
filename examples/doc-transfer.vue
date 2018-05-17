<template>
  <DocItem
    :title="'Transfer 穿梭框'"
    :param="param">
    <div slot="tip">
      默认表现为块级元素样式，高度已经固定
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：{{modelData.select}}</dt>
        <dd>
          <Transfer v-model="modelData.select" v-bind="modelData"></Transfer>
        </dd>
      </dl>
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
            name: 'v-model',
            explain: '选择的数据，对应data数组成员里面的id字段，组件内部对此数据进行了去重操作',
            type: 'Array',
            default: '-',
            isMust: true
          },
          {
            name: 'data',
            explain: '总的数据，【id: 这个选项的值，必须唯一】【text： 选项文案】【disabled： 是否禁用】',
            type: 'Array',
            default: '-',
            isMust: true
          }
        ],
        modelData: {
          data: [],
          select: []
        }
      };
    },
    mounted() {
      this.createData();
    },
    methods: {
      createData() {
        let subject = [
          '语文',
          '数学',
          '英语',
          '历史',
          '政治',
          '生物',
          '化学',
          '地理',
          '物理',
          '体育'
        ];
        let teacher = [
          '王安石',
          '苏东坡',
          '李清照',
          '白居易',
          '陶渊明',
          '冯梦龙',
          '辛弃疾',
          '欧阳修',
          '司马光',
          '王之涣'
        ];
        let total = 25;

        for(let i = 0; i < total; i++) {
          this.modelData.data.push({
            id: i,
            text: `${subject[Math.floor(Math.random() * 10)]} - ${teacher[Math.floor(Math.random() * 10)]} - ${i}`,
            disabled: i % 4 === 0 ? true : false
          });
        }
        for(let i = 0; i < total; i++) {
          if(i % 3 === 0) {
            this.modelData.select.push(i);
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .group {
    & > dt {
      margin-bottom: 5px;
      color: #999;
      font-size: 12px;
    }
  }
</style>
