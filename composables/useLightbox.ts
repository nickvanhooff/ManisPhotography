import { ref, computed, type Ref } from 'vue'

export interface LightboxImage {
  src: string
  alt: string
  title: string
}

export function useLightbox(images: Ref<LightboxImage[]> | LightboxImage[], onIndexChange?: (index: number) => void) {
  // Convert images to reactive computed
  const imagesRef = computed(() => {
    return Array.isArray(images) ? images : images.value
  })
  
  // Core state
  const showLightbox = ref(false)
  const currentImageIndex = ref(0)
  const zoomLevel = ref(1)
  const panX = ref(0)
  const panY = ref(0)
  
  // Refs
  const imageContainer = ref<HTMLElement>()
  const imageElement = ref<HTMLImageElement>()
  
  // Drag state
  const isDragging = ref(false)
  const hasDragged = ref(false)
  const dragStart = ref({ x: 0, y: 0 })
  const lastPan = ref({ x: 0, y: 0 })
  
  // Touch state
  const isTouching = ref(false)
  const hasTouched = ref(false)
  const touchStart = ref({ x: 0, y: 0 })
  const lastTouchPan = ref({ x: 0, y: 0 })
  const initialTouchDistance = ref(0)
  const initialZoomLevel = ref(1)
  
  // Swipe state
  const swipeStart = ref({ x: 0, y: 0 })
  const swipeEnd = ref({ x: 0, y: 0 })
  const isSwiping = ref(false)
  
  // Slideshow state
  const isSlideshowActive = ref(false)
  const slideshowInterval = ref<NodeJS.Timeout | null>(null)
  const slideshowDelay = 3000

  // Loading and error state
  const isLoading = ref(false)
  const hasError = ref(false)

  // Computed
  const currentImage = computed(() => imagesRef.value[currentImageIndex.value])

  // Core functions
  const openLightbox = (index: number) => {
    currentImageIndex.value = index
    showLightbox.value = true
    resetZoomState()
    isLoading.value = true
    hasError.value = false
  }

  const setCurrentImageIndex = (index: number) => {
    currentImageIndex.value = index
  }

  const closeLightbox = () => {
    showLightbox.value = false
    resetZoomState()
    stopSlideshow()
  }

  const resetZoomState = () => {
    zoomLevel.value = 1
    panX.value = 0
    panY.value = 0
  }

  // Navigation
  const prevImage = () => {
    if (currentImageIndex.value > 0) {
      currentImageIndex.value--
      resetZoomState()
      isLoading.value = true
      hasError.value = false
      onIndexChange?.(currentImageIndex.value)
    } else if (isSlideshowActive.value) {
      currentImageIndex.value = imagesRef.value.length - 1
      resetZoomState()
      isLoading.value = true
      hasError.value = false
      onIndexChange?.(currentImageIndex.value)
    }
  }

  const nextImage = () => {
    if (currentImageIndex.value < imagesRef.value.length - 1) {
      currentImageIndex.value++
      resetZoomState()
      isLoading.value = true
      hasError.value = false
      onIndexChange?.(currentImageIndex.value)
    } else if (isSlideshowActive.value) {
      currentImageIndex.value = 0
      resetZoomState()
      isLoading.value = true
      hasError.value = false
      onIndexChange?.(currentImageIndex.value)
    }
  }

  // Zoom functions
  const handleImageClick = (event: MouseEvent) => {
    if (isDragging.value || hasDragged.value || isTouching.value || hasTouched.value) return
    
    setTimeout(() => {
      if (!isDragging.value && !hasDragged.value && !isTouching.value && !hasTouched.value) {
        if (zoomLevel.value === 1) {
          zoomLevel.value = 1.5
          pauseSlideshow()
        } else if (zoomLevel.value === 1.5) {
          zoomLevel.value = 2.5
          pauseSlideshow()
        } else if (zoomLevel.value === 2.5) {
          zoomLevel.value = 4
          pauseSlideshow()
        } else {
          resetZoomState()
        }
      }
    }, 100)
  }

  const resetZoom = () => {
    resetZoomState()
  }

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    
    if (event.deltaY < 0) {
      if (zoomLevel.value < 4) {
        zoomLevel.value = Math.min(4, zoomLevel.value + 0.5)
        pauseSlideshow()
      }
    } else {
      if (zoomLevel.value > 1) {
        zoomLevel.value = Math.max(1, zoomLevel.value - 0.5)
        if (zoomLevel.value === 1) {
          resetZoomState()
        }
      }
    }
  }

  // Drag functions
  const startDrag = (event: MouseEvent) => {
    event.preventDefault()
    isDragging.value = true
    hasDragged.value = false
    dragStart.value = { x: event.clientX, y: event.clientY }
    
    if (zoomLevel.value > 1) {
      lastPan.value = { x: panX.value, y: panY.value }
    }
  }

  const onDrag = (event: MouseEvent) => {
    if (!isDragging.value || !imageElement.value) return
    
    if (event.buttons !== 1) {
      isDragging.value = false
      return
    }
    
    const deltaX = event.clientX - dragStart.value.x
    const deltaY = event.clientY - dragStart.value.y
    
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasDragged.value = true
    }
    
    if (zoomLevel.value > 1) {
      handlePan(deltaX, deltaY)
    } else if (zoomLevel.value === 1 && hasDragged.value) {
      handleDragNavigation(deltaX, deltaY)
    }
  }

  const stopDrag = () => {
    if (isDragging.value && zoomLevel.value === 1 && hasDragged.value) {
      const deltaX = dragStart.value.x - (dragStart.value.x + (lastPan.value.x - panX.value))
      const deltaY = dragStart.value.y - (dragStart.value.y + (lastPan.value.y - panY.value))
      handleDragNavigation(deltaX, deltaY, 80)
    }
    
    isDragging.value = false
    setTimeout(() => {
      isDragging.value = false
      setTimeout(() => {
        hasDragged.value = false
      }, 200)
    }, 10)
  }

  // Touch functions
  const startTouch = (event: TouchEvent) => {
    event.preventDefault()
    
    if (event.touches.length === 1) {
      if (zoomLevel.value > 1) {
        isTouching.value = true
        hasTouched.value = false
        const touch = event.touches[0]
        touchStart.value = { x: touch.clientX, y: touch.clientY }
        lastTouchPan.value = { x: panX.value, y: panY.value }
      }
    } else if (event.touches.length === 2) {
      isTouching.value = true
      hasTouched.value = false
      initialZoomLevel.value = zoomLevel.value
      initialTouchDistance.value = getTouchDistance(event.touches[0], event.touches[1])
    }
  }

  const onTouchMove = (event: TouchEvent) => {
    event.preventDefault()
    
    if (!isTouching.value || !imageElement.value) return
    
    if (event.touches.length === 1) {
      if (zoomLevel.value > 1) {
        const touch = event.touches[0]
        const deltaX = touch.clientX - touchStart.value.x
        const deltaY = touch.clientY - touchStart.value.y
        
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
          hasTouched.value = true
        }
        
        handlePan(deltaX, deltaY, true)
      }
    } else if (event.touches.length === 2) {
      hasTouched.value = true
      const currentDistance = getTouchDistance(event.touches[0], event.touches[1])
      const scale = currentDistance / initialTouchDistance.value
      const newZoomLevel = Math.max(1, Math.min(4, initialZoomLevel.value * scale))
      
      zoomLevel.value = newZoomLevel
      
      if (zoomLevel.value === 1) {
        resetZoomState()
      } else {
        pauseSlideshow()
      }
    }
  }

  const stopTouch = () => {
    isTouching.value = false
    setTimeout(() => {
      isTouching.value = false
      setTimeout(() => {
        hasTouched.value = false
      }, 200)
    }, 10)
  }

  // Swipe functions
  const startSwipe = (event: TouchEvent) => {
    if (event.touches.length === 1 && zoomLevel.value === 1) {
      isSwiping.value = true
      swipeStart.value = { x: event.touches[0].clientX, y: event.touches[0].clientY }
      swipeEnd.value = { x: event.touches[0].clientX, y: event.touches[0].clientY }
    }
  }

  const onSwipeMove = (event: TouchEvent) => {
    if (!isSwiping.value || event.touches.length !== 1 || zoomLevel.value > 1) return
    
    event.preventDefault()
    swipeEnd.value = { x: event.touches[0].clientX, y: event.touches[0].clientY }
  }

  const endSwipe = () => {
    if (!isSwiping.value || zoomLevel.value > 1) {
      isSwiping.value = false
      return
    }
    
    const deltaX = swipeEnd.value.x - swipeStart.value.x
    const deltaY = swipeEnd.value.y - swipeStart.value.y
    const minSwipeDistance = 60
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      pauseSlideshow()
      if (deltaX > 0) {
        if (currentImageIndex.value > 0) {
          prevImage()
        }
      } else {
        if (currentImageIndex.value < imagesRef.value.length - 1) {
          nextImage()
        }
      }
    }
    
    isSwiping.value = false
  }

  // Slideshow functions
  const startSlideshow = () => {
    if (slideshowInterval.value) {
      clearInterval(slideshowInterval.value)
    }
    
    isSlideshowActive.value = true
    slideshowInterval.value = setInterval(() => {
      if (showLightbox.value && zoomLevel.value === 1) {
        nextImage()
      }
    }, slideshowDelay)
  }

  const stopSlideshow = () => {
    isSlideshowActive.value = false
    if (slideshowInterval.value) {
      clearInterval(slideshowInterval.value)
      slideshowInterval.value = null
    }
  }

  const toggleSlideshow = () => {
    if (isSlideshowActive.value) {
      stopSlideshow()
    } else {
      startSlideshow()
    }
  }

  const pauseSlideshow = () => {
    stopSlideshow()
  }

  // Image loading handlers
  const onImageLoad = () => {
    isLoading.value = false
    hasError.value = false
  }

  const onImageError = () => {
    isLoading.value = false
    hasError.value = true
  }

  const retryLoad = () => {
    hasError.value = false
    isLoading.value = true
    // Force image reload by updating src
    if (imageElement.value) {
      const currentSrc = imageElement.value.src
      imageElement.value.src = ''
      setTimeout(() => {
        if (imageElement.value) {
          imageElement.value.src = currentSrc
        }
      }, 10)
    }
  }

  // Helper functions
  const getTouchDistance = (touch1: Touch, touch2: Touch): number => {
    const dx = touch1.clientX - touch2.clientX
    const dy = touch1.clientY - touch2.clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handlePan = (deltaX: number, deltaY: number, isTouch = false) => {
    const newPanX = (isTouch ? lastTouchPan.value.x : lastPan.value.x) + deltaX
    const newPanY = (isTouch ? lastTouchPan.value.y : lastPan.value.y) + deltaY
    
    const imgRect = imageElement.value!.getBoundingClientRect()
    const scaledWidth = imgRect.width * zoomLevel.value
    const scaledHeight = imgRect.height * zoomLevel.value
    
    const maxPanX = Math.max(0, (scaledWidth - imgRect.width) / 2)
    const minPanX = -Math.max(0, (scaledWidth - imgRect.width) / 2)
    const maxPanY = Math.max(0, (scaledHeight - imgRect.height) / 2)
    const minPanY = -Math.max(0, (scaledHeight - imgRect.height) / 2)
    
    panX.value = Math.max(minPanX, Math.min(maxPanX, newPanX))
    panY.value = Math.max(minPanY, Math.min(maxPanY, newPanY))
  }

  const handleDragNavigation = (deltaX: number, deltaY: number, minDistance = 60) => {
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minDistance) {
      pauseSlideshow()
      if (deltaX > 0) {
        if (currentImageIndex.value > 0) {
          prevImage()
          isDragging.value = false
          return
        }
      } else {
        if (currentImageIndex.value < imagesRef.value.length - 1) {
          nextImage()
          isDragging.value = false
          return
        }
      }
    }
  }

  return {
    // State
    showLightbox,
    currentImageIndex,
    zoomLevel,
    panX,
    panY,
    isDragging,
    isTouching,
    isSwiping,
    isSlideshowActive,
    
    // Refs
    imageContainer,
    imageElement,
    
    // Computed
    currentImage,
    
    // Core functions
    openLightbox,
    closeLightbox,
    resetZoom,
    setCurrentImageIndex,
    
    // Navigation
    prevImage,
    nextImage,
    
    // Zoom
    handleImageClick,
    handleWheel,
    
    // Drag
    startDrag,
    onDrag,
    stopDrag,
    
    // Touch
    startTouch,
    onTouchMove,
    stopTouch,
    
    // Swipe
    startSwipe,
    onSwipeMove,
    endSwipe,
    
    // Slideshow
    toggleSlideshow,
    pauseSlideshow,

    // Loading and error
    isLoading,
    hasError,
    onImageLoad,
    onImageError,
    retryLoad
  }
}
