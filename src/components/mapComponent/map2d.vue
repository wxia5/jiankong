<template>
    <div id="map" class="container"></div>
</template>
<script>
import * as maptalks from 'maptalks';
export default {
  mounted () {
    var extent = new maptalks.Extent(110, 30, 120, 40);
    var map = new maptalks.Map('map', {
      center: [-0.113049, 51.498568],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate:
          'http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
      })
    });
    map.setMaxExtent(extent);
  }
};
</script>
<style>
 .container {
  width: 100%;
  height: 100%;
}
</style>
