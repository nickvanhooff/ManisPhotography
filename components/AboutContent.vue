<template>
  <section class="py-24 bg-background relative overflow-hidden">
    <div class="absolute inset-0 bg-accent/5"></div>
    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col h-full">
              <div class="mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:handshake" class="w-6 h-6 text-accent" />
                </div>
                <h3 class="text-2xl font-serif font-bold text-foreground mb-4">Mijn Aanpak</h3>
                <p class="text-muted-foreground">
                  Ik werk nauw samen met mijn klanten om hun visie te begrijpen en te vertalen naar prachtige beelden. Van het eerste contact tot de uiteindelijke levering, zorg ik voor een persoonlijke en professionele ervaring.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col h-full">
              <div class="mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:graduation-cap" class="w-6 h-6 text-accent" />
                </div>
                <h3 class="text-2xl font-serif font-bold text-foreground mb-4">Expertise</h3>
                <p class="text-muted-foreground">
                  Met expertise in verschillende fotografiegenres, waaronder bruiloften, portretten, evenementen en commerciële fotografie, kan ik voor elke gelegenheid de juiste aanpak bieden.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col h-full">
              <div class="mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ph:camera" class="w-6 h-6 text-accent" />
                </div>
                <h3 class="text-2xl font-serif font-bold text-foreground mb-4">Uitrusting</h3>
                <p class="text-muted-foreground">
                  Ik werk met professionele apparatuur van topkwaliteit om de beste resultaten te garanderen. Van high-end camera's tot geavanceerde verlichting, ik zorg voor de juiste tools voor elke situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '#components'
</script> 