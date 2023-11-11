<template>
    <div class="ListContainer">
        <div>등록된 리뷰 수 : {{ store.reviewCnt }}</div>
        <table>
            <thead>
                <tr>
                    <th class="tooLong" v-for="i in titleList" :key="i.id">{{ i }}</th>
                    <th class="shortList" v-for="j in shortList" :key="j.id">{{ j }}</th>
                </tr>
            </thead>
            <tbody>
                <td v-if="store.reviewCnt==0" class="mu">등록된 리뷰가 없습니다.</td>
                <ReviewRow class="rad" v-for="j in store.ReviewList" :dynamic-props="j" :key="j.id"/>
            </tbody>
        </table>
        <div class="box">
            <!-- <button @click="this.$router.go(-1)">목록</button> -->
            <button @click="regist()">리뷰작성</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";
import ReviewRow from './include/ListRow.vue';

const titleList = ['제목', ' 작성자', '등록일', '조회수'];
const shortList = ['제목', ' 작성자', '조회수'];
const store = useReviewStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    await store.getReviewList(route.params.id);
})

function regist(){
    router.push('/regist/'+route.params.id)
}


</script>

<style scoped>

table {
    background-color: #eee;
    border-radius: 10px;
}

th, tbody>* {
    padding:15px;
    text-align: center;
    width: 9%;
    white-space: nowrap;
}
th.shortList{
    padding:15px;
    text-align: center;
    white-space: nowrap;
    font-size: 0.1em;
}

.mu {
    position: relative;
    left:35%;
    white-space: nowrap;
    border-radius: 10px;
}



.ListContainer {
    display: flex;
    flex-direction: column;
    margin : 2em;
    width:80%;
    gap:1em;
    align-items: flex-end;
}

.box {
    display: flex;
    gap:1em;
    justify-content: flex-end;
    }
.box>*{
    padding: 0.5em;
    border-radius: 10%;
    box-shadow: 1px 1px 1px 1px ;
    transition: 0.2s;
}

.box>*:hover{
    background-color: gold;
    transform: scale(1.05);
    color:white;
}


.shortList {
        display: none;
}

@media screen AND (max-width: 768px) {
    .tooLong{
        display: none;
    }

    .shortList {
        display: block;
    }

    table {
        width: 100%;
    }

    tr {
        display: flex;
    }
    tr>* {
        width: 100%;
    }



    tbody>*{
        width: inherit;
    }

    .mu {
    left:0;
}
}

</style>