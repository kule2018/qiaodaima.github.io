<template>
  <div class="transfer-item">
    <div class="content-wrap">
      <div class="title-wrap">
        <!-- <Checkbox v-model="value" :label="0"></Checkbox> -->
        <em class="number">1/14</em>
      </div>
      <div class="list-wrap">
        <!-- <Checkbox v-model="value" :label="0" :text="'西红柿炒鸡蛋'"></Checkbox> -->
      </div>
    </div>

    <div class="operation-wrap">
      <a class="iconfont icon-left" href="javascript:;"></a>
      <a class="iconfont icon-right" href="javascript:;"></a>
    </div>

    <div class="content-wrap">
      <div class="title-wrap">
        <!-- <Checkbox v-model="value" :label="0"></Checkbox> -->
        <em class="number">1/14</em>
      </div>
      <div class="list-wrap">
        {{selectData}}
        <Checkbox
          v-for="(select, index) in selectData"
          :key="index"
          v-model="kk"
          :label="select.label"
          :text="'西红柿炒鸡蛋'">
        </Checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  import Checkbox from '../checkbox/main.vue';

  export default {
    name: 'Transfer',
    components: {
      Checkbox
    },
    props: {
      value: {
        default() {
          return {
            data: [
              {
                id: '1',
                label: '选项1',
                disabled: false
              },
              {
                id: '2',
                label: '选项2',
                disabled: false
              },
              {
                id: '3',
                label: '选项3',
                disabled: false
              },
              {
                id: '4',
                label: '选项4',
                disabled: false
              }
            ],
            selectIndex: [0, 1, 3, 4]
          };
        }
      }
    },
    computed: {
      selectData() {
        const _this = this;
        let data = JSON.parse(JSON.stringify(_this.value.data));
        let arr = [];

        for(let i = 0; i < _this.value.selectIndex.length; i++) {
          arr.push(data.splice(_this.value.selectIndex[i], 1));
          debugger;
        }
        return arr;
      }
    },
    data() {
      return {
        kk: []
      };
    }
  };
</script>

<style lang="scss" scoped>
  .transfer-item {
    position: relative;
    height: 280px;
    overflow: hidden;

    .operation-wrap {
      position: absolute;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%);

      a {
        display: block;
        width: 25px; height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: #ddd;
        transition: all 0.3s;

        &:hover {
          background: #50bfff;
        }
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
    .content-wrap {
      float: left;
      width: calc(50% - 33px); height: 100%;
      border: 1px solid #ddd;
      border-radius: 6px;
      overflow: hidden;

      &:first-child {
        margin-right: 65px;
      }
      .title-wrap {
        position: relative;
        padding: 8px 10px;
        font-size: 0;
        border-bottom: 1px solid #ddd;
        background: #f9fafc;

        .number {
          position: absolute;
          right: 10px; top: 50%;
          font-size: 12px;
          transform: translate(0, -50%);
        }
      }
    }
    .list-wrap {
      max-height: calc(100% - 31px);
      overflow-y: auto;

      .checkbox-item {
        display: block;
        padding: 6px 10px;
        transition: all 0.3s;

        span {
          font-size: 12px !important;
        }
        &:hover {
          background: #ecf8ff;
        }
      }
    }
  }
</style>

<style lang="scss">
  .transfer-item {
    .checkbox-item {
      i {
        margin-right: 15px;
        border-color: #dddee1;
      }
      span {
        font-size: 12px;
      }
    }
  }
</style>
