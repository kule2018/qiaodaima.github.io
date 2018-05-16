<template>
  <div class="textarea-item">
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Textarea'
  };
</script>

<style lang="scss" scoped>
  .textarea-item {
    textarea {
      display: block;
      padding: 5px 10px;
      min-width: 100%; max-width: 100%;
      width: 100%;
      min-height: 5em;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
</style>
