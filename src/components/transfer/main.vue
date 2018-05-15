<template>
  <div class="transfer-item">
    <div class="content-wrap">
      <div class="title-wrap">
        <Checkbox :label="true"></Checkbox>
        <em class="number">{{moveToSelectData.length}}/{{unselectDtat.length}}</em>
      </div>
      <div class="list-wrap">
        <Checkbox
          v-for="(select) in unselectDtat"
          :key="select.id"
          v-model="moveToSelectData"
          :label="select.id"
          :disabled="select.disabled"
          :text="select.text">
        </Checkbox>
      </div>
    </div>

    <div class="operation-wrap">
      <a @click="moveToUnselect" class="iconfont icon-left" href="javascript:;"></a>
      <a @click="moveToSelect" class="iconfont icon-right" href="javascript:;"></a>
    </div>

    <div class="content-wrap">
      <div class="title-wrap">
        <Checkbox :label="true"></Checkbox>
        <em class="number">{{moveToUnselectData.length}}/{{selectData.length}}</em>
      </div>
      <div class="list-wrap">
        <Checkbox
          v-for="(select) in selectData"
          :key="select.id"
          v-model="moveToUnselectData"
          :label="select.id"
          :disabled="select.disabled"
          :text="select.text">
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
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
    computed: {
      // 左侧数据
      unselectDtat() {
        let result = [];

        for(let i = 0; i < this.data.length; i++) {
          let isNoFind = true;

          for(let j = 0; j < this.value.length; j++) {
            if(this.data[i].id === this.value[j]) {
              isNoFind = false;
              break;
            }
          }
          if(isNoFind) {
            result.push(this.data[i]);
          }
        }
        return result;
      },

      // 右侧数据
      selectData() {
        let result = [];
        let temp = Array.from(new Set(this.value));

        for(let i = 0; i < this.data.length; i++) {
          for(let j = 0; j < temp.length; j++) {
            if(this.data[i].id === temp[j]) {
              result.push(this.data[i]);
              break;
            }
          }
        }
        return result;
      }
    },
    data() {
      return {
        unselectDtatCheckAll: [],
        moveToSelectData: [], // 左侧已选的数据

        selectDataCheckAll: [],
        moveToUnselectData: [] // 右侧已选的数据
      };
    },
    watch: {
      moveToSelectData(newValue) {
        if(newValue.length === this.unselectDtat.length) {
          console.log(888);
        }
      }
    },
    methods: {
      // 把左侧数据 移动 到右侧
      moveToSelect() {
        let select = JSON.parse(JSON.stringify(this.value));

        if(!this.moveToSelectData.length) {
          return;
        }

        select.push(...this.moveToSelectData);
        this.moveToSelectData = [];
        this.$emit('input', select);
      },

      // 把右侧数据 移动 到左侧
      moveToUnselect() {
        let select = JSON.parse(JSON.stringify(this.value));

        for(let i = 0; i < this.moveToUnselectData.length; i++) {
          select.splice(select.indexOf(this.moveToUnselectData[i]), 1);
        }

        this.moveToUnselectData = [];
        this.$emit('input', select);
      }
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
