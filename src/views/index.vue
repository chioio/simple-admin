<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGlobal } from '../stores'

  const { t } = useI18n()
  const global = useGlobal()
</script>

<template>
  <n-layout has-sider class="w-screen h-screen">
    <Sidebar />
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
        <div class="flex items-center space-x-4 max-w-58">
          <n-button size="small" type="success" @click="global.toggleTheme">
            {{ t('theme') }}
          </n-button>
          <ThemeSelect />
        </div>
      </n-layout-content>
      <Footer />
    </n-layout>
  </n-layout>
</template>

<style></style>

<i18n lang="yaml">
en:
  theme: Theme
zh-CN:
  theme: 主 题
</i18n>
