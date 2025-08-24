<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-serif font-bold">
          Manis Fotografie
        </NuxtLink>
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.href"
            :to="link.href"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
          <ColorModeButton />
        </div>
        <button
          class="md:hidden text-gray-600 dark:text-gray-300"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 space-y-4"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.href"
          :to="link.href"
          class="block text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navigationLinks = [
  { href: '/about', label: 'Over Ons' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
]
</script> 