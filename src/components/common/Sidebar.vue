<script setup lang="ts">
  import { ref } from 'vue'
  import { LogOutRound } from '@vicons/material'

  const collapsed = ref(false)
</script>

<template>
  <n-layout-sider
    width="15rem"
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    class="sider"
    bordered
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <!-- logo -->
    <Logo :collapsed="collapsed" />
    <!-- user -->
    <div
      :class="[
        'relative flex-shrink-0 flex mx-4 my-2 py-2 items-center h-[4rem]',
        collapsed ? 'justify-center' : 'space-x-4 px-4 bg-black rounded-xl',
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
          Admin
        </span>
      </div>
      <button
        v-if="!collapsed"
        class="self-center flex items-center text-dark-200 hover:text-light-900"
      >
        <LogOutRound class="w-full h-full text-xl" />
      </button>
    </div>
    <!-- menu -->
    <Menu :collapsed="collapsed" />
  </n-layout-sider>
</template>

<style scoped lang="less">
  .sider {
    :deep(.n-layout-toggle-bar) {
      --n-toggle-bar-color: theme('colors.green.800');
      --n-toggle-bar-color-hover: theme('colors.green.300');
    }
    :deep(.n-layout-sider-scroll-container) {
      @apply flex flex-col py-4 !overflow-hidden;
    }
  }
</style>
