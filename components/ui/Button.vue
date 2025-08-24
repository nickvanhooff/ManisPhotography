<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size]
    ]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="[
      'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size]
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => ['sm', 'default', 'lg'].includes(value)
  }
})

const variantClasses = {
  default: 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm',
  outline: 'border-2 border-purple-600 bg-transparent text-purple-600 hover:bg-purple-600 hover:text-white',
  ghost: 'text-purple-600 hover:bg-purple-50'
}

const sizeClasses = {
  sm: 'h-9 px-4 text-sm',
  default: 'h-10 px-5 py-2.5',
  lg: 'h-12 px-6 text-base'
}
</script> 