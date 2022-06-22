<script setup lang="ts">
  defineProps<{ collapsed: boolean }>()
</script>

<template>
  <div :class="['flex-shrink-0 flex items-center justify-center h-14']">
    <span
      :class="[
        'relative font-bold font-cano select-none transition-all duration-300',
        collapsed ? 'text-xl' : 'text-4xl',
      ]"
    >
      Wow
      <span
        :class="[
          'absolute  rounded-full bg-rose-500 transition-all duration-300',
          collapsed
            ? 'top-14px left-20.5px w-3px h-3px'
            : 'top-19px left-37px w-1.5 h-1.5',
        ]"
      />
    </span>
  </div>
</template>
