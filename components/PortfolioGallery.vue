<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="i in 12" :key="i" class="group relative overflow-hidden rounded-lg">
          <div class="aspect-[3/4] w-full bg-muted transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div class="flex h-full items-center justify-center">
              <span class="text-accent-foreground">Foto {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script> 