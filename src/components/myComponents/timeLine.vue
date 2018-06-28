<template>
    <Timeline >
            <TimelineItem v-for="item in data" :key="item.content">
                <p class="time">{{item.time}}</p>
                <p class="content">{{item.content}}</p>
            </TimelineItem>
    </Timeline>
</template>
<script>
export default {
  props: {
    data: Array
  }
};
</script>
