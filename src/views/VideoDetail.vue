<template>
    <div class="flex" v-if="isOk">
        <div v-html="getYoutubeUrl()"></div>
        <router-view/>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useVideoStore } from "@/stores/video";
import { ref, onMounted } from "vue";

const isOk = ref(false);
const store = useVideoStore();
const route = useRoute();

 onMounted(async ()=>{
    await store.getVideoList(route.params.id);
    isOk.value = true;
})


function getYoutubeUrl() {
    const idParam = store.Video?.videoKey;
    return `<iframe 
	width="860" height="515" 
	src="https://www.youtube.com/embed/${idParam}" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
}

</script>

<style scoped>
.flex {
    display: flex;
    min-height: 75vh;
    flex-direction: column;
    align-items: center;
    margin: 2em auto;
}
</style>