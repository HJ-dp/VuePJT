<template>
    <div class="regist">
        <div v-if="isLoading">Loading...</div>
        <div v-else class="regist">
            <h1 v-if="type === 'create'" class="underline">리뷰 작성</h1>
            <h1 v-else class="underline">리뷰 수정</h1>
            <div class="regist_form">
                <!-- <label for="id">글번호</label>
                <input v-if="type == 'create'" type="text" id="id" name="id" v-model="id"/> -->
                <!-- <input v-else type="text" id="isbn" name="id" v-model="id" readonly /><br /> -->
                <label for="title">제목</label>
                <input type="text" id="title" name="title" v-model="title" /><br />
                <label for="writerId">작성자</label>
                <input v-if="type == 'create'" type="text" id="writerId" name="writerId" v-model="writerId" />
                <input v-else type="text" id="writerId" name="writerId" v-model="writerId" readonly /><br />
                <label for="content">내용</label><br />
                <textarea id="content" name="content" v-model="content" cols="30" rows="5"></textarea><br />
                <div class="box">
                <button v-if="type === 'create'" @click="registBook">등록</button>
                <button v-else @click="modifyBook">수정</button>
                <button @click="this.$router.go(-2)">목록</button>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useReviewStore } from '@/stores/review';
import { useUserStore } from "@/stores/user";
const router = useRouter();
const route = useRoute();
const props = defineProps(["type", "omg"]);
const store = useReviewStore();
const userStore = useUserStore();
const type = ref(props.type || "");

const id = ref(1);
const title = ref("");
const writerId = ref(userStore.User?.name);
const content = ref("");
const videoId = ref("");
const regDate = ref("");
const isLoading = ref(true);
console.log(props.omg);
onMounted(async () => {
    if (type.value === "modify") {
        // const route = useRoute();
        await store.getReview(store.Review.id)
        id.value = store.Review.id;
        title.value = store.Review.title;
        writerId.value = store.Review.writerId;
        videoId.value = props.omg;
        content.value = store.Review.content;
        regDate.value = store.Review.regDate;
        isLoading.value = false;
        console.log(props.omg);
    } else {
        isLoading.value = false;
    }
});
// console.log(route.params.videoId);
const registBook = () => {
    const re = {
        id: id.value,
        title: title.value,
        writerId: writerId.value,
        videoId: props.omg,
        content: content.value,
        regDate: regDate.value
    };
    store.registReview(re);
};

const modifyBook = () => {
    const re = {
        id: id.value,
        title: title.value,
        writerId: writerId.value,
        videoId: props.omg,
        content: content.value,
        regDate: regDate.value
    };
    store.modifyReview(re);
};

</script>
  
<style scoped>
.regist {
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
}

.underline {
    font-size: 2em;
}

.regist_form {
    display: flex;
    flex-direction: column;

    /* gap:1em; */
}

label {
    font-weight: bold;
}

input {
    margin: 1em;
    width: 80%;
    border-bottom: dotted 1px #e7e7e7
}

#content {
    margin: 1em;
    width: 80%;
    height: 200px;
    font-size: 18px;
    background-color: #eee;
    resize: none;
    color: black;
    border: none;
    /* border-bottom: 2px solid #0000007e; */
    outline: none;
    padding: 1em;
}

.box {
    width: 85%;
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
</style>
  