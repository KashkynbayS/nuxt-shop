<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import items from '@/data/products.json'

const products = ref(items)
</script>

<style scoped>
.product-list {
  /* ваши стили */
}
</style>
