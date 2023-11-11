<template>
    <div class="container">
        <h1 class="title">로그인</h1>
        <div class="form">
            <fieldset class="box">
                <legend>ID</legend>
                <input type="text" v-model="user.id">
            </fieldset>
            <fieldset class="box">
                <legend>PW</legend>
                <input type="password" v-model="user.password">
            </fieldset>
            <button @click="login" >Login</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useUserStore } from "@/stores/user";

const store = useUserStore()
const  user = ref({
        id : '',
        password : '',
    })
function login(){
    store.loginUser(user.value)
}

</script>
  
<style scoped>
input[type="submit"] {
    height: 30px;
    cursor: pointer;
    transition: 0.2s;
}

input[type="submit"]:hover {
    transform: scale(1.1);
    cursor: pointer;
    font-weight: 500;
}

.title {
    font-weight: 500;
    font-size: 21px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 2em;
    min-height: 80vh;
}

.form {
    margin: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

.box {
    border: 1px solid #eee;
}
</style>