<template>
    <div>
        {{ store.ReviewList }}
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";

const store = useReviewStore()
const route = useRoute();

onMounted(() => {
    store.getReviewList(route.params.id);
    console.log(route.params.id);
})

</script>

<style scoped>

</style>