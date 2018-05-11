<template>
  <div class="doc-item">
    <h2>{{title}}</h2>

    <blockquote  class="tip">
      解释性的说明文字<br>
      解释性的说明文字<br>
      解释性的说明文字<br>
    </blockquote>

    <dl class="doc-example">
      <dt>示例</dt>
      <dd>
        <a class="btn" href="javascript:;">示例操作1</a>
        <a class="btn" href="javascript:;">示例操作2</a>
        <slot name="example"></slot>
      </dd>
    </dl>

    <table class="api-table">
      <caption>props</caption>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>是否必传</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kk, index) in parameter" :key="index">
          <td>{{kk.name}}</td>
          <td>{{kk.explain}}</td>
          <td>{{kk.type}}</td>
          <td>{{kk.defaultValue}}</td>
          <td>{{kk.isMust}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DocItem',
    props: {
      title: {
        type: String,
        default: '组件名 + 中文名'
      },
      parameter: {
        default() {
          return [
            {
              name: '参数名',
              explain: '参数说明',
              type: '参数类型',
              defaultValue: '参数的默认值',
              isMust: '是否必传'
            }
          ];
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .btn {
    padding: 5px 15px;
    border: 1px solid #0079ff;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background: #0079ff;

    &:hover {
      opacity: 0.8;
    }
  }
  .tip {
    padding: 5px 15px;
    line-height: 1.8;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    background: #ecf8ff;
  }
  .doc-example{
    .btn {
      margin-left: 20px;

      &:first-child {
        margin-left: 0;
      }
    }
    dt {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
  .api-table {
    width: 100%;
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;

    caption {
      margin-bottom: 5px;
      text-align: left;
    }
    th,td {
      padding: 5px 16px;
      border: 1px solid #e9e9e9;
      text-align: left;
      white-space: nowrap;

      &:first-child {
        width: 120px;
      }
      &:nth-last-child(1),
      &:nth-last-child(2),
      &:nth-last-child(3) {
        width: 100px;
      }
    }
    thead {
      background: #f7f7f7;
      color: #5c6b77;
    }
  }
  .doc-item {
    .tip {
      margin-top: 5px;
    }
    .doc-example {
      margin-top: 20px;
    }
    .api-table {
      margin-top: 20px;;
    }
  }
</style>
