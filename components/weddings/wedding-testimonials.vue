<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
        Wat Bruidsparen Zeggen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(testimonial, index) in weddingTestimonials"
          :key="index"
          class="bg-background p-6 rounded-lg border border-muted shadow-sm"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span class="text-xl font-bold text-foreground">{{ testimonial.initials }}</span>
            </div>
            <div class="ml-4">
              <h3 class="font-bold text-foreground">{{ testimonial.name }}</h3>
              <p class="text-sm text-muted-foreground">{{ testimonial.date }}</p>
            </div>
          </div>
          <p class="text-muted-foreground">
            {{ testimonial.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const weddingTestimonials = [
  {
    name: 'Lisa en Mark',
    initials: 'LM',
    date: 'Bruiloft - Juni 2023',
    content: 'Manis heeft onze bruiloft op een geweldige manier vastgelegd. De foto\'s zijn prachtig en we zijn er elke dag dankbaar voor. Ze wist precies de juiste momenten vast te leggen.'
  },
  {
    name: 'Sophie en Thomas',
    initials: 'ST',
    date: 'Bruiloft - Augustus 2023',
    content: 'We zijn zo blij dat we Manis hebben gekozen voor onze bruiloft. Ze maakte ons meteen op ons gemak en de foto\'s zijn absoluut geweldig. Een echte aanrader!'
  }
]
</script> 