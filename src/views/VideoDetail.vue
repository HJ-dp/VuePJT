<template>
    <div>
        <!-- <div v-html="getYoutubeUrl()"></div> -->
        {{ store.Video.url }}
        {{ route.params.id }}
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useVideoStore } from "@/stores/video";
import { onMounted } from "vue";

const store = useVideoStore()
const route = useRoute();

onMounted(() => {
    const route = useRoute();
    store.getVideo(route.params.id);
})

const idParam = store.Video;
// let sub_str = idParam.replace('https://www.youtube.com/embed/','');
// function getYoutubeUrl() {
//     return `<iframe 
// 	width="860" height="515" 
// 	src="https://www.youtube.com/embed/${sub_str}" 
// 	title="YouTube video player" frameborder="0" 
// 	allow="accelerometer; autoplay; clipboard-write; 
//     encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
// </iframe>`;
// }

</script>

<style scoped>

</style>