<template>
  <div class="cart-icon">
    🛒 {{ cartItemCount }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/index.js'

const store = useStore()
const cartItemCount = computed(() => store.cart.length)
</script>

<style scoped>
.cart-icon {
  /* ваши стили */
}
</style>
