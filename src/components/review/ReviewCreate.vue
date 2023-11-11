<template>
    <div class="c">
      <WriteForm type="create" :omg="route.params.id" />
    </div>
  </template>
  
  <script setup>
  import WriteForm from "./include/WriteForm.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  </script>
  
  <style scoped>
.c {
  width: 80%;
}
</style>
  