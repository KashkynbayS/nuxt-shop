<!-- components/ProductCard.vue -->
<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Category: {{ product.category }}</p>
    <p>Price: {{ product.price }}$</p>
    <p>Orders: {{ product.orders }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
    <button @click="toggleFavorite(product)">
      <span v-if="product.isFavorite">❤️</span>
      <span v-else>♡</span>
      Add to Favorites
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'
import { useFavoritesStore } from '@/store/favorites'

const props = defineProps({
  product: Object
})

const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

function addToCart(product) {
  cartStore.addToCart(product)
}

function toggleFavorite(product) {
  favoritesStore.toggleFavorite(product)
}
</script>

<style scoped>
/* Стили для карточки товара */
.product-card {
  /* Стили карточки */
}
</style>
