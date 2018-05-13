<template>
  <div class="transfer-item">
    <div class="content-wrap">
      <div class="title-wrap">
        <Checkbox v-model="value" :label="0"></Checkbox>
        <em class="number">1/14</em>
      </div>
      <div class="list-wrap">
        <Checkbox v-model="value" :label="0" :text="'西红柿炒鸡蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'萝卜干爆蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'土豆炒牛肉'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'西红柿炒鸡蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'萝卜干爆蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'土豆炒牛肉'"></Checkbox>
      </div>
    </div>

    <div class="operation-wrap">
      <a class="iconfont icon-left" href="javascript:;"></a>
      <a class="iconfont icon-right" href="javascript:;"></a>
    </div>

    <div class="content-wrap">
      <div class="title-wrap">
        <Checkbox v-model="value" :label="0"></Checkbox>
        <em class="number">1/14</em>
      </div>
      <div class="list-wrap">
        <Checkbox v-model="value" :label="0" :text="'西红柿炒鸡蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'萝卜干爆蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'土豆炒牛肉'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'西红柿炒鸡蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'萝卜干爆蛋'"></Checkbox>
        <Checkbox v-model="value" :label="0" :text="'土豆炒牛肉'"></Checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  import Checkbox from '../checkbox/main.vue';

  export default {
    name: '',
    components: {
      Checkbox
    },
    props: {
      valuel: {}
    },
    computed: {},
    data() {
      return {
        value: []
      };
    }
  };
</script>

<style lang="scss" scoped>
  .transfer-item {
    font-size: 12px;
    overflow: hidden;

    .operation-wrap {
      float: left;
      padding: 0 20px;

      a {
        display: block;
        margin-top: 30px;
        width: 25px; height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: #ddd;
      }
    }
    .content-wrap {
      float: left;
      width: 180px;
      border: 1px solid #ddd;
      border-radius: 6px;
      min-height: 180px;
      overflow: hidden;

      .title-wrap {
        position: relative;
        padding: 5px 10px;
        border-bottom: 1px solid #ddd;
        background: #f9fafc;

        .number {
          position: absolute;
          right: 10px; top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
    .list-wrap {
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
      }
      span {
        font-size: 12px;
      }
    }
  }
</style>
