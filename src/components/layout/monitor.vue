<template>
<div>
        <mainPage></mainPage>
    <Footer style="height:300px;padding:0px">
              <monitorFooter></monitorFooter>
    </Footer>
</div>
</template>
<script>
import mainPage from '../../components/layout/mainPage';
import monitorFooter from '../../components/myComponents/monitor-page';
export default {
  components: {
    monitorFooter,
    mainPage
  }
};
</script>
