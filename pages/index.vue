<template>
  <div>
    <HeroSection
      title="Momenten Vastleggen, Herinneringen Maken"
      subtitle="Professionele fotografie voor bruiloften, portretten en speciale gelegenheden. Laten we samen iets moois creëren."
      ctaText="Neem Contact Op"
      ctaLink="/contact"
    />
    <AboutSection />
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
          Uitgelicht Werk
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="relative group">
            <div class="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-accent-foreground text-lg font-medium">Foto {{ i }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No authentication needed for GitHub backend
</script> 