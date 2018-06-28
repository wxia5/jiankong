<template>
<div>
<div v-for="item in data" :key="item.key" style="position:relative;float:left;padding-right:10px;padding-left:10px">
        <p style="text-align:center">{{item.title}}</p>
        <img :src="item.src" alt="">
</div>
</div>

</template>
<script>
export default {
  props: {
    data: Array
  }
};
</script>
