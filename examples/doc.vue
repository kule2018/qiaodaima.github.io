<template>
  <div class="doc-content">
    <h1>基础组件文档说明</h1>

    <DocInput></DocInput>
    <DocRadio></DocRadio>
    <DocCheckbox></DocCheckbox>
    <DocDialog></DocDialog>
    <DocTransfer></DocTransfer>
    <DocTextarea></DocTextarea>
    <DocAlert></DocAlert>
  </div>
</template>

<script>
  import DocInput from './doc-input.vue';
  import DocRadio from './doc-radio.vue';
  import DocCheckbox from './doc-checkbox.vue';
  import DocDialog from './doc-dialog.vue';
  import DocTransfer from './doc-transfer.vue';
  import DocTextarea from './doc-textarea.vue';
  import DocAlert from './doc-alert.vue';

  export default {
    name: 'Doc',
    components: {
      DocInput,
      DocRadio,
      DocCheckbox,
      DocDialog,
      DocTransfer,
      DocTextarea,
      DocAlert
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
