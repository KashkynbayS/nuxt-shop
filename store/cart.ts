// stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const item = this.items.find(item => item.id === product.id)
      if (item) {
        item.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    },
    checkout() {
      this.items.forEach(item => {
        item.orders += item.quantity
      })
      this.clearCart()
    }
  }
})
