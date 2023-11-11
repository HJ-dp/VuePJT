<template>
    <div class="container">
        <div v-if="type == 'most' && store.VideoList" class="List">
            <cardDetail v-for="i of store.VideoList.data" :dynamic-props='i' :video-url="i.url" :key="i.id" />
        </div>
        <div v-if="type == 'part' && store.seletedVideo" class="List">
            <cardDetail v-for="i of store.seletedVideo" :dynamic-props='i' :video-url="i.url" :key="i.id" />
        </div>
    </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/video";
import { ref, onMounted } from "vue";
import cardDetail from './VideoCard.vue'



const props = defineProps(["type"]);

const type = ref(props.type || "");

const store = useVideoStore();

onMounted(() => {
    store.getVideoList();
    store.getPartVideo('전신');
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

</style>