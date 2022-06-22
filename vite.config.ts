import { defineConfig } from 'vite'
import * as path from 'path'

import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import i18n from '@intlify/vite-plugin-vue-i18n'
import components from 'unplugin-vue-components/vite'
import windicss from 'vite-plugin-windicss'
import fonts from 'vite-plugin-fonts'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['oh-vue-icons/icons'],
  },
  plugins: [
    vue(),
    eslint({
      useEslintrc: true,
    }),
    i18n(),
    components({
      resolvers: [
        NaiveUiResolver(),
        (componentName) =>
          componentName === 'VIcon' && {
            name: 'Icon',
            from: '@vicons/utils',
          },
      ],
    }),
    windicss(),
    fonts({
      custom: {
        families: [
          {
            name: 'Cano',
            src: 'src/assets/fonts/en/cano/Cano.ttf',
          },
        ],
        preload: true,
        prefetch: false,
      },
    }),
  ],
})
