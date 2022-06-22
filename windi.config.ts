import { defineConfig } from 'windicss/helpers'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.*'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // foreground color
        fground: '#fff',
        // background color
        bground: '#000',
      },
      fontFamily: {
        cano: ['Cano', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
})
