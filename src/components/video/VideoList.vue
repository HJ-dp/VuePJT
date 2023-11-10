<template>
    <div class="container">
            <div v-if="store.VideoList" class="List">
                <cardDetail v-for="i of store.VideoList.data" :dynamic-props='i' :video-url="i.url" :key="i.id" />
            </div>
        </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/video";
import { onMounted } from "vue";
import cardDetail from './VideoCard.vue'

const store = useVideoStore()

onMounted(() => {
    store.getVideoList()
    console.log(store.VideoList);
})

</script>

<style scoped>
.List {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex-wrap: wrap;
}

card {
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #e7e7e7;
    padding: 10px;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: 0.2s;
    gap:0.5em;
}

card:hover {
    cursor: pointer;
    transform: scale(1.03);
}
</style>