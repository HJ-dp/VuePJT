<template>
    <header>
        <RouterLink to="/" class="logo">SSAFIT</RouterLink>
        <!-- <div class="logo">SSAFIT</div> -->
        <nav class="global-nav">
            <RouterLink to="/" class="global-nav-item">Home</RouterLink>
            <RouterLink v-if="store.User!='' " to="/" class="global-nav-item">마이페이지</RouterLink>
            
            <RouterLink v-if="store.User=='' " to="/login" class="global-nav-item">로그인</RouterLink>
            <RouterLink v-if="store.User=='' " to="/signup" class="global-nav-item">회원가입</RouterLink>
            <div v-else> {{ store.User.name }}님 환영합니다.</div>
        </nav>
    </header>
</template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script setup>
import { useUserStore } from '../../stores/user';
const store = useUserStore();

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

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}


@media screen and (max-width:768px) {
    header {
        flex-direction: column;
        gap: 1em;
    }

    .global-nav {
        flex-direction: column;
        /* display: none; */
        gap: 2em;
        transition: 0.2s;
    }

    .menu {
        display: block;
    }
}
</style>