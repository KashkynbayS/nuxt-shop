<template>
    <div>
      <h1>Избранные</h1>
      <div v-if="items.length">
        <ProductCard
          v-for="product in items"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-else>
        <p>Список избранного пуст</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '~/components/ProductCard.vue';
  
  export default {
    components: {
      ProductCard
    },
    computed: {
      items() {
        return this.$store.state.favorites.items;
      }
    }
  };
  </script>
  