<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
        Wat Klanten Zeggen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span class="text-xl font-bold">{{ testimonial.initials }}</span>
            </div>
            <div class="ml-4">
              <h3 class="font-bold">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            {{ testimonial.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Jan en Marieke',
    initials: 'JM',
    role: 'Bruidspaar',
    content: 'Manis heeft onze bruiloft op een prachtige manier vastgelegd. De foto\'s zijn adembenemend en we zijn er elke dag dankbaar voor.'
  },
  {
    name: 'Familie de Vries',
    initials: 'DV',
    role: 'Familieportret',
    content: 'De familiefoto\'s zijn precies zoals we ze wilden hebben. Manis heeft een geweldig oog voor detail en wist precies de juiste momenten vast te leggen.'
  },
  {
    name: 'Sarah',
    initials: 'S',
    role: 'Portretfotografie',
    content: 'Ik voelde me meteen op mijn gemak tijdens de fotoshoot. De resultaten zijn verbluffend en ik ben er super blij mee!'
  }
]
</script> 