<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n({ useScope: 'global' })

  const locales = [
    { label: 'English', value: 'en' },
    { label: '简体中文', value: 'zh-CN' },
  ]
</script>

<template>
  <n-select v-model:value="locale" size="small" :options="locales" />
</template>

<i18n lang="yaml">
en:
  locale: Locale
zh-CN:
  locale: 语 言
</i18n>
