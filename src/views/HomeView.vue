<template>
  <div class="container">
    <h1 class="title">가장 많이 본 영상</h1>
    <List/>
  </div>
</template>

<script setup>
import List from '../components/video/VideoList.vue'
</script>

<style scoped>
.title {
  font-weight: 500;
  font-size: 21px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2em;
  min-height: 70vh;
  gap:2em;
}

</style>