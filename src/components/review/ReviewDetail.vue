<template>
    <div class="top">
        <div class="Container" v-if="isOk">
            <div class="title">
                <div class="title-item">No.{{ route.params.id }}</div>
                <div class="title-item t">제목 | {{ store.Review.title }}</div>
                <div class="title-item">작성자 {{ store.Review.writerId }}</div>
                <div class="title-item">{{ store.Review.regDate }}</div>
                <div class="title-item">{{ store.Review.viewCnt }}View</div>
            </div>
            <div class="content">{{ store.Review.content }}</div>
        </div>
        <div class="box">
            <button @click="this.$router.go(-1)">목록</button>
            <button @click="modify(store.Review.id)">수정</button>
            <button @click="deleteReview()">삭제</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import { useReviewStore } from '@/stores/review';
const store = useReviewStore();
const isOk = ref(false);
const route = useRoute();
const router = useRouter();
onMounted(async () => {
    await store.getReview(route.params.id);
    isOk.value = true;
})

function deleteReview() {
    store.deleteReview(route.params);
}

function modify(id) {
    router.push('/modify/' + id)
}

</script>


<style scoped>
.top {
    width: 80%;
}

.Container {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    width: 100%;
    gap: 1em;
    align-items: flex-end;
    background-color: #eee;
    box-sizing: border-box;
}


.title {
    display: flex;
    gap: 2em;
    width: 100%
}

.title .t {
    width: 100%;
    text-align: left;
    padding-left: 1em;
    ;
}

.title>* {
    width: 20%;
    text-align: center;
    padding: 1em;
}


.content {
    padding: 0 2em 2em 2em;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    white-space: normal;
}

.box {
    display: flex;
    gap: 1em;
    justify-content: flex-end;
}

.box>* {
    padding: 0.5em;
    border-radius: 10%;
    box-shadow: 1px 1px 1px 1px;
    transition: 0.2s;
}

.box>*:hover {
    background-color: gold;
    transform: scale(1.05);
    color: white;
}


@media screen AND (max-width: 768px) {
    .title {
        gap: 0px;
    }

}
</style>