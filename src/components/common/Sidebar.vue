<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { LogOutRound } from '@vicons/material'

  const { t } = useI18n({ inheritLocale: true })

  const collapsed = ref(false)
</script>

<template>
  <n-layout-sider
    width="15rem"
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    :aria-collapsed="collapsed"
    bordered
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <!-- logo -->
    <Logo :collapsed="collapsed" />
    <!-- user -->
    <n-el
      :class="[
        'relative flex-shrink-0 flex mx-4 my-2 py-2 items-center h-[4rem] transition-colors duration-300',
        collapsed
          ? 'justify-center'
          : 'space-x-4 px-4 rounded-xl bg-gray-100 dark:(bg-black)',
      ]"
    >
      <n-avatar
        round
        size="large"
        src="https://avatars.githubusercontent.com/u/36913769?v=4"
        :class="['flex-shrink-0']"
      />
      <span
        v-if="collapsed"
        class="content-[\'\'] absolute bottom-2 inset-x-0 mx-auto w-2.5 h-2.5 shadow-inner rounded-full border border-green-500 bg-green-400"
      />
      <div
        v-if="!collapsed"
        class="inline-flex flex-col font-bold align-bottom whitespace-nowrap"
      >
        <span class="text-lg"> Tenn Chio </span>
        <span :class="['relative pl-4 text-xs']">
          <i
            class="absolute left-0 inset-y-0 my-auto w-2.5 h-2.5 shadow-inner rounded-full border border-green-500 bg-green-400"
          />
          {{ t('admin') }}
        </span>
      </div>
      <button
        v-if="!collapsed"
        class="self-center flex items-center text-dark-200 hover:text-light-900"
      >
        <LogOutRound class="w-full h-full text-xl" />
      </button>
    </n-el>
    <!-- menu -->
    <Menu :collapsed="collapsed" />
  </n-layout-sider>
</template>

<style scoped lang="less">
  :deep(.n-layout-sider-scroll-container) {
    @apply flex flex-col py-4 !overflow-hidden;
  }
</style>

<i18n lang="yaml">
en:
  admin: Admin
zh-CN:
  admin: 管理员
</i18n>
