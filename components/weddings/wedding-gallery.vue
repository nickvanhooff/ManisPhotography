<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
        Bruiloft Foto's
      </h2>
      <Gallery :images="weddingImages" />
    </div>
  </section>
</template>

<script setup lang="ts">
const weddingImages = [
  {
    src: '/images/wedding/ManisPhotography_bruiloft 1.avif',
    alt: 'Bruiloft foto 1',
    title: 'Bruidspaar'
  },
  {
    src: '/images/wedding/ManisPhotography_bruiloft 2.avif',
    alt: 'Bruiloft foto 2',
    title: 'Ceremonie'
  },
  {
    src: '/images/wedding/ManisPhotography_bruiloft 3.avif',
    alt: 'Bruiloft foto 3',
    title: 'Receptie'
  },
  {
    src: '/images/wedding/ManisPhotography_bruiloft 4.avif',
    alt: 'Bruiloft foto 4',
    title: 'Eerste dans'
  },
  {
    src: '/images/wedding/ManisPhotography_bruiloft 5.avif',
    alt: 'Bruiloft foto 5',
    title: 'Familie foto'
  },
  {
    src: '/images/wedding/ManisPhotography_bruiloft.avif',
    alt: 'Bruiloft foto 6',
    title: 'Locatie'
  }
]
</script> 