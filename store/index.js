import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
    favorites: []
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find(item => item.id === product.id)
      if (!item) {
        this.cart.push({ ...product, quantity: 1 })
      } else {
        item.quantity++
      }
    },
    toggleFavorite(productId) {
      const index = this.favorites.indexOf(productId)
      if (index === -1) {
        this.favorites.push(productId)
      } else {
        this.favorites.splice(index, 1)
      }
    }
  }
})
