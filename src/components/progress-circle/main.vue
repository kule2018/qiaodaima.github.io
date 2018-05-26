<template>
  <div class="progress-circle-item">
    <canvas
      id="process"
      :width="size"
      :height="size">
    </canvas>
  </div>
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
    },
    mounted() {
      this.creat();
    },
    methods: {
      creat() {
        let $canvas = document.getElementById('process');
        let ctx = $canvas.getContext('2d');

        // 底环
        ctx.beginPath();
        ctx.arc(this.size / 2, this.size / 2, this.size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.trailColor;
        ctx.fill();

        // 高亮环
        ctx.beginPath();
        ctx.moveTo(this.size / 2, this.size / 2);
        ctx.arc(this.size / 2, this.size / 2, this.size / 2, Math.PI * 1, Math.PI * (1.5 + 2 * 50 / 100));
        ctx.fillStyle = this.strokeColor;
        ctx.fill();

        // 内填充圆
        ctx.beginPath();
        ctx.arc(this.size / 2, this.size / 2, this.size / 2 - 5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = '#fff';
        ctx.fill();

        // 填充文字
        ctx.font = 'bold 10pt Microsoft YaHei';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.moveTo(this.size / 2, this.size / 2);
        ctx.fillText('75%', this.size / 2, this.size / 2);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .progress-circle-item {
    position: relative;
    display: inline-block;
    font-size: 0;

    .canvas {
      display: block;
    }
  }
</style>
