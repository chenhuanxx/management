<template>
  <div class="map-ol">
    <h3>我是地图</h3>
    <div class="map">
      <map ></map>
    </div> 
  </div>
</template>
<script>
import map from '@/components/map.vue'
export default {
  components: {
    map
  },
  data() {
  },
  mounted() {
    this.$emit('navChange', false, 9, 'lg',)
  }
}
</script>
<style>
.map {
  height: 500px;
  width: 100%;
}
</style>
