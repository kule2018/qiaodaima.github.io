<template>
  <div class="progress-circle-item">ProgressCircle</div>
</template>

<script>
  export default {
    name: 'ProgressCircle',
    props: {
      size: {
        type: Number,
        default: 120
      },
      percent: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 5
      },
      trailColor: {
        type: String,
        default: '#eaeef2'
      },
      strokeColor: {
        type: String,
        default: '#2db7f5'
      }
    }
  };
</script>

<style lang="scss" scoped>
  .progress-circle-item {
    font-size: 18px;
    color: red;
  }
</style>
