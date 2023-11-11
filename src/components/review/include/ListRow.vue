<template>
    <tr @click="move(dynamicProps.id)">
        <td>{{ dynamicProps.title }}</td>
        <td>{{ dynamicProps.writerId }}</td>
        <td class="tooLong">{{ dynamicProps.regDate }}</td>
        <td>{{ dynamicProps.viewCnt }}</td>
    </tr>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
    dynamicProps : Object,
})
const router = useRouter();
const move = (id)=>{
    router.push('review/'+id)
}
</script>

<style scoped>
    tr {
        background-color: #e9e9e9;
        transition: 0.2s;
        border-radius: 10px;
    }

    tr:hover {
        background-color: gold;
        transform: scale(1.001);
        cursor: pointer;
    }

    td {
        padding: 1em;
    }

@media screen AND (max-width: 768px) {
    .tooLong{
        display: none;
    }
    tr>* {
        width: 100%;
    }

}
</style>