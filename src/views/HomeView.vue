<template>
  <div class="container">
    <h1 class="title">가장 많이 본 영상</h1>
    <List type='most'/>
    <br>
    <h1 class="title">파트별 운동 영상</h1>
    <part/>
    <List type="part"/>
  </div>
</template>

<script setup>
import List from '../components/video/VideoList.vue'
import part from '../components/video/partSelector.vue'
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
}
body{
  min-height: 70vh;
}

</style>