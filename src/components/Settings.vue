<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
</script>

<template>
  <button :class="['hover:text-blue-500']" @click="() => (visible = !visible)">
    SETTINGS
  </button>
  <n-drawer v-model:show="visible" width="20rem"></n-drawer>
</template>
