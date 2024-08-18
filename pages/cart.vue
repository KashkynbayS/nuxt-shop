<template>
    <div>
      <h1>Корзина</h1>
      <div v-if="items.length">
        <div v-for="item in items" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}₸ x {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Удалить</button>
        </div>
        <button @click="checkout">Оплатить</button>
      </div>
      <div v-else>
        <p>Корзина пуста</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      items() {
        return this.$store.state.cart.items;
      }
    },
    methods: {
      removeFromCart(id) {
        this.$store.commit('cart/removeFromCart', id);
      },
      checkout() {
        this.$store.commit('cart/clearCart');
        alert('Оплата прошла успешно!');
      }
    }
  };
  </script>
  