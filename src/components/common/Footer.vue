<script setup lang="ts">
  import { Heart } from '@vicons/ionicons5'
</script>

<template>
  <n-layout-footer class="flex items-center px-10 h-12" bordered>
    <p class="flex items-center space-x-1">
      Made with
      <v-icon size="15" class="text-red-500 mx-1.5">
        <Heart />
        <Heart class="absolute animate-ping" />
      </v-icon>

      by
      <a
        class="text-bold hover:(underline text-rose-500)"
        href="https://chioio.tech"
      >
        chioio
      </a>
      .
    </p>
  </n-layout-footer>
</template>
