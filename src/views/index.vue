<!-- filename: index-page.vue -->
<script setup lang="ts"></script>

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
        <n-button size="small" type="success">BUTTON</n-button>
      </n-layout-content>
      <Footer />
    </n-layout>
  </n-layout>
</template>

<style></style>
