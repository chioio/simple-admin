<!-- filename: index-page.vue -->
<script setup lang="ts">
  import { ref } from 'vue'

  const collapsed = ref(false)
</script>

<template>
  <n-layout has-sider class="w-screen h-screen">
    <n-layout-sider
      width="15rem"
      collapse-mode="width"
      :collapsed-width="60"
      show-trigger="bar"
      content-style=""
      bordered
      :on-update:collapsed="(c) => (collapsed = c)"
    >
      <!-- logo -->
      <Logo :collapsed="collapsed" />
      <!-- menu -->
    </n-layout-sider>
    <n-layout>
      <n-layout-header
        :class="['flex items-center space-x-4 px-10 h-14']"
        bordered
      >
        <Settings />
        <span>HEADER</span>
      </n-layout-header>
      <n-layout-content :class="['p-8 min-h-[calc(100%-6.5rem)]']">
        <n-h1>MAIN LAYOUT</n-h1>
        <n-button type="success">BUTTON</n-button>
      </n-layout-content>
      <Footer />
    </n-layout>
  </n-layout>
</template>

<style>
  .n-layout-sider .n-layout-toggle-bar {
    --n-toggle-bar-color: theme('colors.rose.900');
    --n-toggle-bar-color-hover: theme('colors.rose.600');
  }
</style>

<i18n lang="yaml">
en:
  menu:
    dashboard: Dashboard
    components: Components
    material-pool: Material Pool
zh-CN:
  menu:
    dashboard: 仪表盘
    components: 组件库
    material-pool: 物料池
</i18n>
