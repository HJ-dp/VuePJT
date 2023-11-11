<template>
    <div class="c">
      <WriteForm type="modify" :omg="route.params.id" />
    </div>
  </template>
  
  <script setup>
  import WriteForm from "./include/WriteForm.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();

  const components = {
    WriteForm,
  };
  </script>
  
  <style scoped>
.c {
  width: 80%;
}
</style>
  