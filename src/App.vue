<script setup lang="ts">
  import { ref, watch, nextTick } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
  import { useGlobal } from './stores'
  import colors from 'windicss/colors'

  const { locale } = useI18n()
  const global = useGlobal()
  const render = ref(true)

  watch(
    () => locale.value,
    (v, o) => {
      if (v !== o) {
        render.value = false
        nextTick(() => (render.value = true))
      }
    }
  )

  /**
   * Use this for type hints under js file
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const lightThemeOverrides: GlobalThemeOverrides = {
    Layout: {
      siderToggleBarColor: colors.green[200],
      siderToggleBarColorHover: colors.green[500],
    },
    Menu: {
      borderRadius: '8px',
      itemHeight: '35px',
    },
  }

  const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
      textColorBase: colors.gray[50],
      textColor1: colors.gray[100],
      textColor2: colors.gray[200],
      textColor3: colors.gray[300],
    },
    Layout: {
      siderToggleBarColor: colors.green[800],
      siderToggleBarColorHover: colors.green[500],
    },
    Menu: {
      borderRadius: '8px',
      itemHeight: '35px',
    },
  }
</script>

<template>
  <n-config-provider
    inline-theme-disabled
    :theme="global.theme"
    :theme-overrides="global.theme ? darkThemeOverrides : lightThemeOverrides"
  >
    <n-theme-editor>
      <router-view v-if="render" />
      <n-global-style />
    </n-theme-editor>
  </n-config-provider>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
