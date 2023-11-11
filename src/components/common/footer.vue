<template>
    <div>
        <nav class="flex footer-nav">
            <RouterLink class="footer-nav-item" :to="{ name: 'signup' }">회원가입</RouterLink>
            <RouterLink class="footer-nav-item" :to="{ name: 'home' }">영상조회</RouterLink>
            <RouterLink class="footer-nav-item" :to="{ name: 'home' }">고객센터</RouterLink>
        </nav>
        <footer>
            <div class="flex">
                <p style="white-space: nowrap">&copy; 2023 SSAFIT</p>
                <p class="f-content">주) SSAFIT | 대표자명: 김소연,이호진 | 사업자번호: 123-12-12345 | 통신판매신고번호: 제 2014-서울마포-1050 호
                    (사업자 정보 확인) | 이메일 문의: cs@ssafit.com | 개인정보보호책임자: 이호진 | 주소: 서울특별시 마포구 싸피5길 41 | 대표번호: 1234-1234 고객님의 안전한
                    현금자산
                    거래를 위하여 싸피은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스 가입사실 확인</p>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
footer {
    background-color: #eee;
    padding: 2em 2em;
}

.footer-nav {
    background-color: #e7e7e7;
}

.footer-nav-item {
    width: 100%;
    text-align: center;
    transition: 0.2s;
    padding: 10px;
}

.footer-nav-item:hover {
    background-color: #eee;
    transform: scale(1.1);
    text-align: center;
    cursor: pointer;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:1em;
}

.f-content {
    max-width: 1200px;
}
</style>