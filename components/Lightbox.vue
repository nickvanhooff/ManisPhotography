<template>
  <div
    v-if="showLightbox"
    class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
    @click="handleClose"
    @touchstart="startSwipe"
    @touchmove="onSwipeMove"
    @touchend="endSwipe"
  >
    <!-- Close button -->
    <button
      class="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      @click.stop="handleClose"
    >
      <Icon name="heroicons:x-mark" class="w-8 h-8" />
    </button>

    <!-- Reset Zoom button -->
    <button
      class="absolute top-4 left-4 text-white hover:text-gray-300 z-10"
      @click.stop="resetZoom"
      v-if="zoomLevel > 1"
    >
      <Icon name="heroicons:arrows-pointing-out" class="w-8 h-8" />
    </button>

    <!-- Slideshow Play/Pause button -->
    <button
      class="absolute top-4 left-16 text-white hover:text-gray-300 z-10"
      @click.stop="toggleSlideshow"
      v-if="zoomLevel === 1"
    >
      <Icon
        :name="isSlideshowActive ? 'heroicons:pause' : 'heroicons:play'"
        class="w-8 h-8"
      />
    </button>

    <!-- Previous Image button -->
    <button
      class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
      @click.stop="prevImage"
      v-if="(currentImageIndex > 0 || isSlideshowActive) && !isSlideshowActive"
    >
      <Icon name="heroicons:arrow-left" class="w-8 h-8" />
    </button>

    <!-- Next Image button -->
    <button
      class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
      @click.stop="nextImage"
      v-if="(currentImageIndex < images.length - 1 || isSlideshowActive) && !isSlideshowActive"
    >
      <Icon name="heroicons:arrow-right" class="w-8 h-8" />
    </button>

    <!-- Image Container -->
    <div
      :class="[
        'w-full relative overflow-hidden transition-all duration-300',
        isSlideshowActive ? 'max-w-full p-0' : 'max-w-6xl p-4'
      ]"
      @click.stop="handleImageClick"
      @wheel="handleWheel"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startTouch"
      @touchmove="onTouchMove"
      @touchend="stopTouch"
      ref="imageContainer"
    >
      <img
        :src="currentImage.src"
        :alt="currentImage.alt"
        :class="[
          'transition-transform duration-300 ease-out select-none',
          'w-full h-auto object-contain',
          isSlideshowActive ? 'max-h-screen' : 'max-h-[80vh]',
          zoomLevel === 1 ? 'cursor-zoom-in md:cursor-zoom-in' : 'cursor-grab md:cursor-grab',
          isDragging || isTouching ? 'cursor-grabbing md:cursor-grabbing' : ''
        ]"
        :style="{
          transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
          transformOrigin: 'center center'
        }"
        ref="imageElement"
        @load="onImageLoad"
        @error="onImageError"
      />

      <!-- Loading State -->
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>

      <!-- Error State -->
      <div v-if="hasError" class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <Icon name="heroicons:exclamation-triangle" class="w-12 h-12 mx-auto mb-4 text-red-400" />
          <p class="text-lg font-medium">Afbeelding kon niet worden geladen</p>
          <button @click="retryLoad" class="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">
            Opnieuw proberen
          </button>
        </div>
      </div>

      <!-- Text content, hidden when slideshow is active -->
      <div v-if="!isSlideshowActive" class="text-center mt-4 text-white">
        <h3 class="text-xl font-medium mb-2">{{ currentImage.title }}</h3>
        <p class="text-gray-300">{{ currentImage.alt }}</p>
        <p class="text-sm text-gray-400 mt-2">
          {{ currentImageIndex + 1 }} van {{ images.length }}
        </p>
        <p class="text-sm text-gray-400 mt-1">
          Klik om in te zoomen • Pinch om te zoomen • Swipe om te navigeren • Klik play voor slideshow ({{ zoomLevel }}x)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue'
import { useLightbox, type LightboxImage } from '../composables/useLightbox'
import { useKeyboardNavigation } from '../composables/useKeyboardNavigation'

interface Props {
  images: LightboxImage[]
  showLightbox: boolean
  currentImageIndex: number
}

interface Emits {
  (e: 'close'): void
  (e: 'update:currentImageIndex', index: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Function to emit currentImageIndex updates
const emitImageIndexUpdate = (index: number) => {
  emit('update:currentImageIndex', index)
}

const {
  showLightbox,
  currentImageIndex,
  zoomLevel,
  panX,
  panY,
  isDragging,
  isTouching,
  isSlideshowActive,
  imageContainer,
  imageElement,
  currentImage,
  openLightbox,
  closeLightbox,
  resetZoom,
  setCurrentImageIndex,
  prevImage,
  nextImage,
  handleImageClick,
  handleWheel,
  startDrag,
  onDrag,
  stopDrag,
  startTouch,
  onTouchMove,
  stopTouch,
  startSwipe,
  onSwipeMove,
  endSwipe,
  toggleSlideshow,
  isLoading,
  hasError,
  onImageLoad,
  onImageError,
  retryLoad
} = useLightbox(computed(() => props.images), emitImageIndexUpdate)

// Override closeLightbox to emit event
const handleClose = () => {
  closeLightbox()
  emit('close')
}

// Keyboard navigation
useKeyboardNavigation({
  onEscape: handleClose,
  onArrowLeft: () => {
    if (currentImageIndex.value > 0) {
      prevImage()
      emitImageIndexUpdate(currentImageIndex.value)
    }
  },
  onArrowRight: () => {
    if (currentImageIndex.value < props.images.length - 1) {
      nextImage()
      emitImageIndexUpdate(currentImageIndex.value)
    }
  },
  onSpacebar: toggleSlideshow
})

// Watch for showLightbox prop changes and sync currentImageIndex
watch(() => props.showLightbox, (newValue) => {
  if (newValue && !showLightbox.value) {
    showLightbox.value = true
  }
})

// Watch for currentImageIndex prop changes to sync with lightbox
watch(() => props.currentImageIndex, (newIndex) => {
  setCurrentImageIndex(newIndex)
}, { immediate: true })
</script>
