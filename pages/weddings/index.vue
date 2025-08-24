<template>
  <div>
    <WeddingsWeddingHero />
    <WeddingsWeddingGallery />
    <WeddingsWeddingTestimonials />
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-foreground">
          Bruiloft Fotografie Pakketten
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-background p-6 rounded-lg shadow-lg border border-border">
            <h3 class="text-2xl font-bold mb-4 text-foreground">Basis Pakket</h3>
            <p class="text-muted-foreground mb-4">
              Perfect voor een intieme bruiloft
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">4 uur fotografie</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">50 bewerkte foto's</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Online galerij</span>
              </li>
            </ul>
            <button class="w-full bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/90 transition-colors">
              Meer Informatie
            </button>
          </div>
          <div class="bg-background p-6 rounded-lg shadow-lg border border-border">
            <h3 class="text-2xl font-bold mb-4 text-foreground">Premium Pakket</h3>
            <p class="text-muted-foreground mb-4">
              Compleet pakket voor uw speciale dag
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">8 uur fotografie</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">150 bewerkte foto's</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Online galerij</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Engagement shoot</span>
              </li>
            </ul>
            <button class="w-full bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/90 transition-colors">
              Meer Informatie
            </button>
          </div>
          <div class="bg-background p-6 rounded-lg shadow-lg border border-border">
            <h3 class="text-2xl font-bold mb-4 text-foreground">Luxe Pakket</h3>
            <p class="text-muted-foreground mb-4">
              Alles-in-één ervaring
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">12 uur fotografie</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">300 bewerkte foto's</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Online galerij</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Engagement shoot</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:check" class="w-5 h-5 text-accent mr-2" />
                <span class="text-foreground">Foto album</span>
              </li>
            </ul>
            <button class="w-full bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/90 transition-colors">
              Meer Informatie
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script> 