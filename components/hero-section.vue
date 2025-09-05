<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0 bg-black/30">
      <img
        src="/images/Branding/manisdefretes_sep(28).jpg"
        alt="Fotografie achtergrond"
        class="w-full h-full object-cover object-center"
        width="1468"
        height="1038"
        quality="60"
        loading="eager"
        preload
        fetchpriority="high"
      />
    </div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <div class="bg-black/50 p-8 rounded-lg backdrop-blur-sm">
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
        <NuxtLink
          v-if="ctaText"
          :to="ctaLink"
          class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
        >
          {{ ctaText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  ctaText: {
    type: String,
    default: ''
  },
  ctaLink: {
    type: String,
    default: '/contact'
  }
})
</script>

<style scoped>
section {
  contain: content;
}
</style>