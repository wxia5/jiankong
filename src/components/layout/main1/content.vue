<template>
        <Layout>
        <Content class="content" :style="{ minHeight: '280px', background: '#fff'}">
            <map2d style="width:50%;position:relative;float:left;paddingp-right:5px;"></map2d>
            <map3d style="width:50%;position:relative;float:left;paddingp-left:5px;"></map3d>
        </Content>
        <Sider class="sider-con" hide-trigger  width="200">
          <timeLine :data='data'></timeLine>
        </Sider>
        </Layout>
</template>
<script>
import map2d from '../../mapComponent/map2d';
import map3d from '../../mapComponent/map3d';
import sideMenu from '../../layout/sideMenu';
import timeLine from '../../myComponents/timeLine';

export default {
  data () {
    return {
      data: [
        {time: '8:00', content: '园区大门'},
        {time: '8:00', content: '园区大门'},
        {time: '8:00', content: '园区大门'},
        {time: '8:00', content: '园区大门'},
        {time: '8:00', content: '园区大门'}
      ]
    };
  },
  components: {
    map2d,
    sideMenu,
    timeLine,
    map3d
  }
};
</script>
<style lang="less" scoped>
.sider-con{
  background: #fff;
  padding: 10px;
  border-radius: 3px;
  border:1px solid black;
}
</style>
