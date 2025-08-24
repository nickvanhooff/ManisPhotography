<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0 bg-black/30">
      <img
        src="@/assets/images/Branding/manisdefretes_sep(28).jpg"
        alt="Event fotografie"
        class="w-full h-full object-cover object-center"
        width="1920"
        height="1080"
        loading="eager"
      />
    </div>
    <div class="relative z-20 container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-white">
          Jouw Event, Mijn Lens
        </h1>
        <p class="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
          Festivals, bedrijfsfeesten en evenementen vastgelegd met oog voor detail.
        </p>
        <div class="flex justify-center gap-4 pt-4">
          <UiButton
            to="/contact"
            variant="default"
            size="lg"
          >
            Plan een Shoot
          </UiButton>
          <UiButton
            variant="outline"
            size="lg"
            @click="scrollToGallery"
          >
            Bekijk Portfolio
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToGallery = () => {
  const galleryElement = document.getElementById('gallery')
  if (galleryElement) {
    galleryElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script> 