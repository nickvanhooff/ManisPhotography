<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-foreground">
        Portfolio
      </h2>
      <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Ontdek mijn werk in verschillende categorieën. Van bruiloften tot festivals en evenementen.
      </p>
      
      <!-- Category Tabs -->
      <div class="flex justify-center mb-12">
        <div class="flex space-x-1 bg-muted p-1 rounded-lg">
          <button
            v-for="category in categories"
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="[
              'px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
              selectedCategory === category.value
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            ]"
          >
            {{ category.label }}
          </button>
        </div>
      </div>

      <!-- Image Count -->
      <div class="text-center mb-8">
        <p class="text-muted-foreground">
          {{ currentImages.length }} foto's in {{ getCategoryLabel(selectedCategory) }}
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(image, index) in currentImages"
          :key="`${selectedCategory}-${image.src}`"
          class="group relative cursor-pointer overflow-hidden rounded-lg border border-border"
          @click="openLightbox(index)"
        >
          <div class="aspect-[4/3] bg-muted">
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white">
                <h3 class="text-lg font-medium mb-1">{{ image.title }}</h3>
                <p class="text-sm opacity-90">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Component -->
      <Lightbox
        :images="currentImages"
        :show-lightbox="showLightbox"
        :current-image-index="currentImageIndex"
        @close="closeLightbox"
        @update:current-image-index="updateCurrentImageIndex"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePortfolioImages } from '../composables/usePortfolioImages'
import { useLightbox, type LightboxImage } from '../composables/useLightbox'
import Lightbox from './Lightbox.vue'

const { getImagesByCategory } = usePortfolioImages()

const selectedCategory = ref('weddings')
const showLightbox = ref(false)
const currentImageIndex = ref(0)

const categories = [
  { value: 'weddings', label: 'Bruiloften' },
  { value: 'festivals', label: 'Festivals' },
  { value: 'events', label: 'Evenementen' }
]

const currentImages = computed(() => {
  return getImagesByCategory(selectedCategory.value)
})

const getCategoryLabel = (category: string) => {
  const found = categories.find(c => c.value === category)
  return found ? found.label : category
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}

const updateCurrentImageIndex = (index: number) => {
  currentImageIndex.value = index
}

// Reset currentImageIndex when category changes
watch(selectedCategory, () => {
  currentImageIndex.value = 0
  // Close lightbox if it's open when switching categories
  if (showLightbox.value) {
    showLightbox.value = false
  }
})
</script>
