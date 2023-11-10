<template>
    <div class="flex" v-if="isOk">
        <!-- <div v-html="getYoutubeUrl()"></div> -->
        <!-- {{ store.Video.url }} -->
        <iframe 
	width="860" height="515" 
	src="https://www.youtube.com/embed/{{ store.Video.url }}" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
        {{ route.params.id }}
        <router-view/>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useVideoStore } from "@/stores/video";
import { onMounted, watch, ref } from "vue";

const isOk = ref(false);
const store = useVideoStore();
const route = useRoute();
const s = ref();

onMounted(() => {
    store.getVideo(route.params.id);
    load();
})

async function load(){
    await store.getVideo(route.params.id);
    const idParam = store.Video?.url;
    let sub_str = idParam?.replace('https://www.youtube.com/embed/','');
    isOk.value = true;
    console.log(sub_str);
    s.value = ref('');
    }

watch(store.Video, ()=>{
    isOk = !isOk;
})

async function getYoutubeUrl() {
    await load();
    const idParam = store.Video?.url;
    let sub_str = idParam?.replace('https://www.youtube.com/embed/','');
    isOk.value = true;
    console.log(sub_str);
    return `<iframe 
	width="860" height="515" 
	src="https://www.youtube.com/embed/${sub_str}" 
	title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
}

</script>

<style scoped>
.flex {
    display: flex;
    min-height: 100%;
}
</style>