<template>
    <div id="container">
        <button @click="partChange('전신')">
            <div class="img"></div>
            <h3>전신</h3>
        </button>
        <button @click="partChange('상체')">
            <div class="img"></div>
            <h3>상체</h3>
        </button>
        <button @click="partChange('하체')">
            <div class="img"></div>
            <h3>하체</h3>
        </button>
        <button @click="partChange('복부')">
            <div class="img"></div>
            <h3>복부</h3>
        </button>
    </div>
</template>

<script setup>
import { useVideoStore } from '../../stores/video';

const store = useVideoStore();

function partChange(p){
    store.getPartVideo(p);
}

</script>

<style scoped>

#container {
    display: flex;
    gap:3em;
    margin: 2em 0 0 0;
}

button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}

button:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.img {
    width: 3em;
    height: 3em;
    background-color: blue;
    border-radius: 100%;
    background-image: url('/ddd.png');
    background-position: 50% 50%;
    background-size: 140%;
}
</style>