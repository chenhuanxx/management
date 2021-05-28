<template>
  <div class="map-ol">
    <h3>我是地图</h3>
    <div class="map">
      <olmap ></olmap>
    </div>
  </div>
</template>
<script>
import olmap from '@/components/olmap.vue'
export default {
  components: {
    olmap
  },
  data() {
  },
  mounted() {
    this.$emit('navChange', false, 7, 'lg',)
  }
}
</script>
<style>
.map-ol {
  position: relative;
}
.map {
  position: absolute;
  height: 500px;
  width: 100%;
}
</style>
