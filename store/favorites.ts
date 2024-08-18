// stores/favorites.ts
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: []
  }),
  actions: {
    toggleFavorite(product) {
      const index = this.items.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.items.splice(index, 1)
      } else {
        this.items.push(product)
      }
    }
  }
})
