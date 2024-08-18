<script setup>
import Basket from "@/components/Basket.vue";
import Logo from "@/assets/images/logo.png";
</script>

<template>
    <div class="header">
        <img class="logo" :src="Logo" alt="Logo">
        <Basket />
    </div>
</template>

<style scoped>
.header { 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 100px;
}
</style>