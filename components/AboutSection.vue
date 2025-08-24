<template>
  <section class="py-24 bg-gradient-to-b from-purple-50 to-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Hi! Ik ben Manïs
            </h2>
            <div class="w-20 h-1 bg-purple-600 rounded-full"></div>
          </div>
          <div class="space-y-6 text-gray-700">
            <p class="text-lg leading-relaxed">
              Jouw fotograaf voor evenementen, portretten en bruiloften. Met mij worden bijzondere momenten vastgelegd als blijvende herinneringen.
            </p>
            <p class="text-lg leading-relaxed">
              Bij Manïs Photography draait alles om jouw verhaal. Ik leg niet alleen de grote momenten vast, maar ook de kleine details die het speciaal maken. Ik werk snel en zorg voor een professionele afwerking van je foto's, zodat je direct kunt genieten van het resultaat. Altijd met oog voor sfeer, emotie en duidelijke communicatie gedurende het hele proces.
            </p>
          </div>
          <UiButton
            to="/about"
            variant="outline"
            size="lg"
          >
            Meer over mij
          </UiButton>
        </div>
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200">
            <!-- Placeholder for photographer image -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-gray-600">Fotograaf Afbeelding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script> 