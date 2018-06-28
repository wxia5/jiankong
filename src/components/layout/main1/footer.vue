<template>
    <Footer style='padding:0px;height:200px;'>
      <eventPic :data='data'></eventPic>
    </Footer>
</template>
<script>
import eventPic from './event';
export default {
  data () {
    return {
      value: 10,
      data: [
        {title: '8:00', key: 1, src: '../../../../static/img/people/people1.jpg'},
        {title: '8:30', key: 2, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '11:00', key: 3, src: '../../../../static/img/people/people1.jpg'},
        {title: '13:00', key: 4, src: '../../../../static/img/people/people1.jpg'}
      ]
    };
  },
  components: {
    eventPic
  }
};
</script>
