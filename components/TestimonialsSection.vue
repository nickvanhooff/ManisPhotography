<template>
  <section class="py-16 bg-muted">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-serif font-bold text-center text-foreground mb-12">
        Wat Klanten Zeggen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-background p-6 rounded-lg shadow-sm">
          <p class="text-muted-foreground mb-4">{{ testimonial.text }}</p>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
              <span class="text-accent-foreground">{{ testimonial.initials }}</span>
            </div>
            <div>
              <h4 class="font-medium text-foreground">{{ testimonial.name }}</h4>
              <p class="text-sm text-muted-foreground">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text: "Manis heeft onze bruiloft op een prachtige manier vastgelegd. De foto's zijn natuurlijk en emotioneel, precies wat we wilden.",
    name: "Sarah & Mark",
    role: "Bruidspaar",
    initials: "S&M"
  },
  {
    text: "Professionele aanpak en geweldige resultaten. De familieportretten zijn precies zoals we ze voor ogen hadden.",
    name: "De Vries Familie",
    role: "Familieportret",
    initials: "DV"
  },
  {
    text: "De foto's van ons bedrijfsevent zijn perfect gelukt. Manis heeft echt gevoel voor het vastleggen van de juiste momenten.",
    name: "Tech Solutions B.V.",
    role: "Bedrijfsevent",
    initials: "TS"
  }
]
</script> 