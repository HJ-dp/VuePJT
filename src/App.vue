<template>
  <theHeader/>
  <RouterView />
  <theFooter/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import theFooter from './components/common/footer.vue'
import theHeader from './components/common/header.vue'

</script>

<style scoped>

</style>
