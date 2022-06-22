<script setup lang="ts">
  import { darkTheme, NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
  import colors from 'windicss/colors'

  /**
   * Use this for type hints under js file
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const overrides: GlobalThemeOverrides = {
    common: {
      textColorBase: colors.gray[50],
      textColor1: colors.gray[100],
      textColor2: colors.gray[200],
      textColor3: colors.gray[300],
    },
    Menu: {
      borderRadius: '8px',
      itemHeight: '35px',
    },
  }
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="overrides">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
