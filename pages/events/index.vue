<template>
  <div>
    <EventsHero />
    <EventsGallery />
    <section class="py-24 bg-background relative overflow-hidden">
      <div class="absolute inset-0 bg-accent/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-foreground">
            Jouw Event, Mijn Focus
          </h2>
          <p class="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Als event fotograaf zet ik mij volledig in om de sfeer en emotie van jouw evenement vast te leggen. Kies het pakket dat het beste bij jouw event past.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Klein Event Package -->
          <div class="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col h-full">
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2 text-foreground">Klein Event</h3>
                <p class="text-muted-foreground">
                  Perfect voor bedrijfsborrels en kleine feesten
                </p>
              </div>
              <div class="mb-8 flex-grow">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <Icon name="heroicons:camera" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">3 uur professionele fotografie</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:photo" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Minimaal 75 bewerkte foto's</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:cloud" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Online galerij met downloadoptie</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:clock" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Levering binnen 5 werkdagen</span>
                  </li>
                </ul>
              </div>
              <UiButton
                to="/contact"
                variant="outline"
                class="w-full group"
                size="lg"
              >
                Vraag Offerte Aan
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </UiButton>
            </div>
          </div>

          <!-- Volledig Event Package -->
          <div class="bg-card p-8 rounded-xl shadow-xl border-2 border-accent relative transform hover:-translate-y-1 transition-all duration-300 md:scale-105">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Meest Gekozen
            </div>
            <div class="flex flex-col h-full">
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2 text-foreground">Volledig Event</h3>
                <p class="text-muted-foreground">
                  Ideaal voor bedrijfsfeesten en festivals
                </p>
              </div>
              <div class="mb-8 flex-grow">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <Icon name="heroicons:camera" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">6 uur professionele fotografie</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:photo" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Minimaal 150 bewerkte foto's</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:cloud" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Online galerij met downloadoptie</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:clock" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Levering binnen 7 werkdagen</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:sparkles" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Preview binnen 24 uur</span>
                  </li>
                </ul>
              </div>
              <UiButton
                to="/contact"
                variant="default"
                class="w-full group"
                size="lg"
              >
                Vraag Offerte Aan
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </UiButton>
            </div>
          </div>

          <!-- Maatwerk Package -->
          <div class="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col h-full">
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2 text-foreground">Maatwerk</h3>
                <p class="text-muted-foreground">
                  Voor events met specifieke wensen
                </p>
              </div>
              <div class="mb-8 flex-grow">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <Icon name="heroicons:clock" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Flexibele tijdsduur</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:photo" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Aantal foto's in overleg</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:cloud" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Online galerij met downloadoptie</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:calendar" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Levertijd in overleg</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:book-open" class="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span class="text-foreground">Optioneel fotoalbum</span>
                  </li>
                </ul>
              </div>
              <UiButton
                to="/contact"
                variant="outline"
                class="w-full group"
                size="lg"
              >
                Plan Gesprek
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import EventsHero from '~/components/events/events-hero.vue'
import EventsGallery from '~/components/events/events-gallery.vue'
</script> 