<template>
    <div class="layout">
        <Layout style="height:100%" >
             <headerComponent></headerComponent>
            <!--<mainComponent></mainComponent>
            <footerComponent></footerComponent> -->
            <!-- <router-view class="view one"></router-view> -->
                <router-view  name="a"></router-view>
               <router-view  name="b"></router-view>
            <!-- <router-view></router-view> -->
            <!-- <bodyComponent></bodyComponent>
            <Footer style="height:300px;padding:0px">
              <monitorPage></monitorPage>
            </Footer> -->
        </Layout>
    </div>
</template>
<script>

import headerComponent from './layout/header';
import mainComponent from './layout/main';
import footerComponent from './layout/footer';
require('./../../static/lib/css/animate.css');
export default {
  components: {
    headerComponent,
    footerComponent,
    mainComponent
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

</style>
