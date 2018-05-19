<template>
  <div class="doc-content">
    <h1>基础组件文档说明</h1>

    <DocDialog></DocDialog>
    <DocSideBar></DocSideBar>
    <DocAlert></DocAlert>
    <DocTransfer></DocTransfer>
    <DocInput></DocInput>
    <DocRadio></DocRadio>
    <DocCheckbox></DocCheckbox>
    <DocTextarea></DocTextarea>
  </div>
</template>

<script>
  import DocDialog from './doc-dialog.vue';
  import DocSideBar from './doc-side-bar.vue';
  import DocAlert from './doc-alert.vue';
  import DocTransfer from './doc-transfer.vue';
  import DocInput from './doc-input.vue';
  import DocRadio from './doc-radio.vue';
  import DocCheckbox from './doc-checkbox.vue';
  import DocTextarea from './doc-textarea.vue';

  export default {
    name: 'Doc',
    components: {
      DocDialog,
      DocSideBar,
      DocAlert,
      DocTransfer,
      DocInput,
      DocRadio,
      DocCheckbox,
      DocTextarea
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
    font-size: 28px;
    color: #409eff;
  }
  .doc-content {
    margin: 0 auto;
    padding: 20px;
    width: 1200px;

    .doc-item {
      margin-bottom: 20px;;
      padding: 20px;
      border: 1px dashed #eee;
      border-radius: 6px;
      transition: all 0.5s;

      &:hover {
        border-color: transparent;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>
