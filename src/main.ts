import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'virtual:fonts.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import app from './app.vue'
import router from './router'
import store from './stores'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  message: {
    en: {},
    'zh-CN': {},
  },
})

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(app).use(i18n).use(store).use(router).mount('#app')
