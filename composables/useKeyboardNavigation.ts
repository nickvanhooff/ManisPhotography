import { onMounted, onUnmounted } from 'vue'

export interface KeyboardNavigationHandlers {
  onEscape?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onSpacebar?: () => void
}

export function useKeyboardNavigation(handlers: KeyboardNavigationHandlers) {
  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        handlers.onEscape?.()
        break
      case 'ArrowLeft':
        e.preventDefault()
        handlers.onArrowLeft?.()
        break
      case 'ArrowRight':
        e.preventDefault()
        handlers.onArrowRight?.()
        break
      case ' ':
        e.preventDefault()
        handlers.onSpacebar?.()
        break
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
}
