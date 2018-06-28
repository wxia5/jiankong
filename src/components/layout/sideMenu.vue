<template>
    <Row type="flex" class="code-row-bg">
       <Col span="8">
            <Card dis-hover class="monitor-card">
                <p slot="title" class="monittor-card-header">车辆</p>
                <div class="scroll-container">
                <scroll-bar dis-scroll-x>
                <div v-for="i in 100" :key="i">
                    <monitorCard
                    class="list-item"
                    fileName="2017.09.12"
                    time="2017.09.12"
                    similarity="60%"
                    imgURL="./../../../static/img/vehicle/monitor1.png"
                    >
                    </monitorCard>
                </div>
                    </scroll-bar>
                </div>
            </Card>

        </Col>
        <Col span="8">
        <Card dis-hover class="monitor-card">
                <p slot="title" class="monittor-card-header">人员</p>
                <div class="scroll-container">
                <scroll-bar dis-scroll-x>
                <div v-for="i in 100" :key="i">
                    <monitorCard
                    class="list-item"
                    fileName="2017.09.12"
                    time="2017.09.12"
                    similarity="60%"
                    imgURL="./../../../static/img/people/people1.jpg"
                    >
                    </monitorCard>
                </div>
                    </scroll-bar>
                </div>
            </Card>
        </Col>
        <Col span="8">
        <Card dis-hover class="monitor-card">
                <p slot="title" class="monittor-card-header">人员</p>
                <div class="scroll-container">
                <scroll-bar dis-scroll-x>
                <div v-for="i in 100" :key="i">
                    <monitorCard
                    class="list-item"
                    fileName="2017.09.12"
                    time="2017.09.12"
                    similarity="60%"
                    :imgURL=getRandomNum(3)
                    >
                    </monitorCard>
                </div>
                    </scroll-bar>
                </div>
            </Card>
        </Col>
    </Row>
</template>
<script>
import monitorCard from '../myComponents/monitor-card.vue';
import scrollBar from './../scroll-bar/vue-scroller-bars';
export default {
  components: {
    monitorCard: monitorCard,
    scrollBar
  },
  methods: {
    getRandomNum (amount) {
      var index = parseInt(amount * Math.random()) + 1;
      var result = './../../../static/img/people/people' + index + '.jpg';
      console.log(result);
      return result;
    }
  }
};
</script>

<style lang="less">
.monitor-card{
    height: 100%;
    background:#666;
    color: white;
    .monittor-card-header{
        color: white
    }
}
.scroll-container{
  height: 300px;
}
.list-item{
  word-break: keep-all;
  white-space: nowrap;
}
</style>
