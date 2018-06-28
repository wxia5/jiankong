<template>
    <div id="map3d" class="container"></div>
</template>
<script>
require('../../../static/lib/Cesium/Widgets/widgets.css');
export default {
  mounted () {
    var viewer = new Cesium.Viewer('map3d');
  }
};
</script>
<style>
 .container {
  width: 100%;
  height: 100%;
}
</style>
