import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'

export const useGlobal = defineStore('global', {
  state: () => ({
    theme: ref<GlobalTheme | null>(null),
  }),

  actions: {
    toggleTheme() {
      if (this.theme) {
        this.theme = null
      } else {
        this.theme = darkTheme
      }
      document.documentElement.classList.toggle('dark', !!this.theme)
    },
  },
})
