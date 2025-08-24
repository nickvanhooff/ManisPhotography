<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-foreground">
        Portfolio
      </h2>
      <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Elk evenement heeft zijn eigen verhaal. Met mijn camera vang ik de energie, emotie en sfeer van het moment.
      </p>
      
      <!-- Category Selection -->
      <div id="gallery" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Festivals Category -->
        <div 
          class="relative group cursor-pointer rounded-lg overflow-hidden border border-muted"
          @click="selectedCategory = 'festivals'"
        >
          <div class="aspect-[4/3] bg-background">
            <img
              src="/images/Branding/manisdefretes_sep(28).jpg"
              alt="Festivals"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              width="800"
              height="600"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-2xl font-medium">Festivals</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Evenementen Category -->
        <div 
          class="relative group cursor-pointer rounded-lg overflow-hidden border border-muted"
          @click="selectedCategory = 'bedrijfsfeesten'"
        >
          <div class="aspect-[4/3] bg-background">
            <img
              src="/images/Branding/manisdefretes_sep(28).jpg"
              alt="Evenementen"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              width="800"
              height="600"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-2xl font-medium">Bedrijfsfeesten</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Festivals Gallery -->
      <div v-if="selectedCategory === 'festivals'" class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <div class="space-y-2">
            <h3 class="text-2xl font-serif font-bold text-foreground">Festivals</h3>
            <p class="text-muted-foreground">De energie van live muziek en entertainment gevangen in beeld.</p>
          </div>
          <button 
            @click="selectedCategory = null"
            class="text-accent hover:text-accent/80 transition-colors"
          >
            Terug
          </button>
        </div>
        <Gallery :images="festivalImages" />
      </div>

      <!-- Evenementen Gallery -->
      <div v-if="selectedCategory === 'bedrijfsfeesten'" class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <div class="space-y-2">
            <h3 class="text-2xl font-serif font-bold text-foreground">Bedrijfsfeesten</h3>
            <p class="text-muted-foreground">Professionele momenten met een persoonlijke touch.</p>
          </div>
          <button 
            @click="selectedCategory = null"
            class="text-accent hover:text-accent/80 transition-colors"
          >
            Terug
          </button>
        </div>
        <Gallery :images="eventImages" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCategory = ref<string | null>(null)

// Festival Images (TheConflict & Aversion)
const festivalImages = [
  {
    src: '/images/events/TheConflict/TheconflictManïsPhotography(1).avif',
    alt: 'TheConflict Festival - Live Performance',
    title: 'TheConflict Festival'
  },
  {
    src: '/images/events/TheConflict/TheconflictManïsPhotography(2).avif',
    alt: 'TheConflict Festival - Crowd Energy',
    title: 'TheConflict Festival'
  },
  {
    src: '/images/events/TheConflict/TheconflictManïsPhotography(3).avif',
    alt: 'TheConflict Festival - Stage Action',
    title: 'TheConflict Festival'
  },
  {
    src: '/images/events/Aversion/Aversion_ManïsPhotography(1).avif',
    alt: 'Aversion Festival - Artist Performance',
    title: 'Aversion Festival'
  },
  {
    src: '/images/events/Aversion/Aversion_ManïsPhotography(2).avif',
    alt: 'Aversion Festival - Stage Lighting',
    title: 'Aversion Festival'
  },
  {
    src: '/images/events/Aversion/Aversion_ManïsPhotography(3).avif',
    alt: 'Aversion Festival - Crowd Moment',
    title: 'Aversion Festival'
  }
]

// Event Images (Bedrijfsuitje)
const eventImages = [
  {
    src: '/images/events/event/eventphoto(1).jpg',
    alt: 'Bedrijfsuitje - Team Building',
    title: 'Bedrijfsuitje'
  },
  {
    src: '/images/events/event/eventphoto(2).jpg',
    alt: 'Bedrijfsuitje - Networking Event',
    title: 'Bedrijfsuitje'
  },
  {
    src: '/images/events/event/eventphoto(3).jpg',
    alt: 'Bedrijfsuitje - Corporate Celebration',
    title: 'Bedrijfsuitje'
  }
]
</script> 