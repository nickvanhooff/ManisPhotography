<template>
  <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-serif font-bold text-center mb-12">
        Familie Fotografie Portfolio
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(image, index) in images" :key="index" class="relative group">
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            width="600"
            height="800"
            format="avif"
            quality="80"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <p class="text-white text-lg font-medium">{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  {
    src: '/images/Branding/manisdefretes_sep(28).jpg',
    alt: 'Familie portret'
  },
  {
    src: '/images/Branding/manisdefretes_sep(28).jpg',
    alt: 'Familie moment'
  },
  {
    src: '/images/Branding/manisdefretes_sep(28).jpg',
    alt: 'Familie samen'
  }
]
</script> 