<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="relative group cursor-pointer"
      @click="openLightbox(index)"
    >
      <div class="aspect-[4/3] bg-background rounded-lg overflow-hidden">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-white text-lg font-medium">{{ image.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div
    v-if="showLightbox"
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    @click="closeLightbox"
  >
    <button
      class="absolute top-4 right-4 text-white hover:text-gray-300"
      @click.stop="closeLightbox"
    >
      <Icon name="heroicons:x-mark" class="w-8 h-8" />
    </button>
    <button
      class="absolute left-4 text-white hover:text-gray-300"
      @click.stop="prevImage"
      v-if="currentImageIndex > 0"
    >
      <Icon name="heroicons:arrow-left" class="w-8 h-8" />
    </button>
    <button
      class="absolute right-4 text-white hover:text-gray-300"
      @click.stop="nextImage"
      v-if="currentImageIndex < images.length - 1"
    >
      <Icon name="heroicons:arrow-right" class="w-8 h-8" />
    </button>
    <div class="max-w-4xl w-full p-4" @click.stop>
      <img
        :src="images[currentImageIndex].src"
        :alt="images[currentImageIndex].alt"
        class="w-full h-auto max-h-[80vh] object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  images: {
    type: Array as PropType<Array<{ src: string; alt: string; title: string }>>,
    required: true
  }
})

const showLightbox = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const nextImage = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++
  }
}

// Close lightbox on escape key
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  })
})
</script> 