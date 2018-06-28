<template>
<div>
    <Layout style="height:50%">
      <contentComponent style="padding:5px;"></contentComponent>
      <Sider hide-trigger
      :style="{background: '#fff',padding:'5px'}"
      width="550"
      >
      <sideMenu></sideMenu>
      </Sider>
    </Layout>
</div>
</template>
<script>
import contentComponent from './content';
import sideMenu from './sideMenu';
export default {
  components: {
    contentComponent: contentComponent,
    sideMenu: sideMenu
  }
};
</script>
<style  scoped>
</style>
