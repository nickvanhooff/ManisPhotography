<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
    @click="toggleColorMode"
  >
    <Icon
      :name="colorMode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'"
      class="w-6 h-6"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 