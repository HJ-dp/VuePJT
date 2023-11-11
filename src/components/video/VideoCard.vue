<template>
    <card @click="detailView(dynamicProps.id)">
        <img :src="getImageUrl(dynamicProps.url)" />
        <div class="flex">
            <div class="title">{{ dynamicProps.title }}</div>
            <div class="flex right">
                <div>{{ dynamicProps.viewCnt }}View</div>
            </div>
        </div>
        <div class="flex">
            <div class="badge">{{ dynamicProps.part }}</div>
            <div>{{ dynamicProps.channelName }}</div>
        </div>
    </card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useVideoStore } from "@/stores/video";

const store = useVideoStore();
const router = useRouter()
const detailView = async (id) => {
    await store.getVideo(id)
    router.push('video/'+ id )
}

defineProps({
    dynamicProps: Object,
    videoUrl: String
})

function getImageUrl(name) {
    let sub_str = name.replace('https://www.youtube.com/embed/','');
    return `https://img.youtube.com/vi/${sub_str}/mqdefault.jpg`;
}

</script>

<style scoped>
.title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.right {
    margin-right: 1em;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}


.badge {
    background-color: #A2B59F;
    color: white;
    width: 35px;
    border: solid 1px white;
    border-radius: 10px;
    text-align: center;
    padding: 3px;
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
    gap: 0.5em;
}

card:hover {
    cursor: pointer;
    transform: scale(1.03);
}
</style>