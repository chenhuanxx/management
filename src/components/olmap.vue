<template>
  <div id="map" ref="rootmap">
  </div>
</template>

<script>
import "ol/ol.css"
import { Map, View } from "ol"
import mapconfig from '../mapJs/mapconfig'
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    var mapcontainer = this.$refs.rootmap;
    this.map = new Map({
      target: mapcontainer,
      layers: mapconfig.streetmap(),
      view: new View({
        projection: "EPSG:4326",    //使用这个坐标系
        center: [mapconfig.x,mapconfig.y],  //深圳
        zoom: mapconfig.zoom
      })
    });
  }
};
</script>

<style>
#map{
  height:100%;
  position: absolute;
  width: 100%;
}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}

</style>