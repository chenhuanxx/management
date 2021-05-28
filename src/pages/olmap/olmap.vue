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
import map from '@/components/map.vue'
export default {
  components: {
    map,
    olmap
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.$emit('navChange', false, 7, 'lg',)
  }
}
</script>
<style>
.map {
  position: absolute;
  height: 500px;
  width: 100%;
}
</style>
