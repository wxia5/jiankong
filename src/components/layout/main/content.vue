<template>
        <Layout>
        <Content class="content" :style="{ minHeight: '280px', background: '#fff'}">
            <map2d></map2d>
        </Content>
        <Sider hide-trigger  width="550" :style="{background: '#fff'}">
            <sideMenu style="height:100%"></sideMenu>
        </Sider>
        </Layout>
</template>
<script>
import map2d from '../../mapComponent/map2d';
import sideMenu from '../../layout/sideMenu';
export default {
  components: {
    map2d,
    sideMenu
  }
};
</script>
<style>
</style>
