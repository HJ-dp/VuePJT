<template>
    <header>
        <RouterLink to="/" class="logo">SSAFIT</RouterLink>
        <!-- <div class="logo">SSAFIT</div> -->
        <nav :class="{'global-nav':true}">
            <RouterLink to="/" class="global-nav-item">Home</RouterLink>
            <RouterLink v-if="store.User == ''" to="/login" class="global-nav-item">로그인</RouterLink>
            <div v-else> {{ store.User.name }}님 환영합니다.</div>
            <RouterLink v-if="store.User != ''" to="/mypage" class="global-nav-item">마이페이지</RouterLink>
            <RouterLink v-if="store.User == ''" to="/signup" class="global-nav-item">회원가입</RouterLink>
            <button v-else @click="store.logout()" class="global-nav-item">로그아웃</button>
        </nav>
        <!-- <button @click="toggle()"><svg class="me" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button> -->
    </header>
</template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/user';
const store = useUserStore();
const isActive = ref(true);
function toggle(){
    console.log(isActive.value);
    isActive.value = !isActive.value;
}

</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    padding: 1em 2em;
    align-items: center;
}

.nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.global-nav {
    display: flex;
    gap: 2em;
}

.global-nav-item {
    font-weight: 500;
    transition: 0.2s;
    cursor: pointer;
}

.global-nav-item:hover {
    transform: scale(1.1);
}

.menu {
    display: none;
    cursor: pointer;
}

.visible {
    display: block;
}

.logo {
    font-weight: 800;
    font-size: xx-large;
}

a {
    cursor: pointer;
}

.active {
    display: flex;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}
.me {
    position: absolute;
    visibility: hidden;
    right: 2em;
    top: 1.5em;
    transform: scale(1.5);
    transition: 0.2s;
}

.me:hover {
    transform: scale(1.7);
    cursor: pointer;
}

@media screen and (max-width:768px) {
    header {
        flex-direction: column;
        gap: 1em;
    }

    .global-nav {
        flex-direction: column;
        /* display: none; */
        align-items: center;
        gap: 2em;
        transition: 0.2s;
    }

    .menu {
        display: block;
    }

    .me {
    visibility:visible;
}
}


</style>