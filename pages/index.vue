<!-- pages/index.vue -->
<template>
  <div>
    
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import productsData from '~/data/products.json'

const products = ref(productsData)
</script>
