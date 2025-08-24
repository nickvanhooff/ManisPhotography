<template>
  <div class="min-h-screen bg-background">
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 items-center">
        <div class="mr-4 flex">
          <NuxtLink to="/" class="mr-6 flex items-center space-x-2">
            <span class="font-bold">Manis Fotografie</span>
          </NuxtLink>
                     <nav class="flex items-center space-x-6 text-sm font-medium">
             <div class="relative group">
               <button class="flex items-center space-x-1 transition-colors hover:text-foreground/80">
                 <span>Portfolio</span>
                 <Icon name="heroicons:chevron-down" class="w-4 h-4" />
               </button>
                               <div class="absolute left-0 top-full mt-1 w-40 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="py-1">
                    <NuxtLink to="/portfolio" class="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border">
                      Portfolio Overzicht
                    </NuxtLink>
                    <NuxtLink to="/weddings" class="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Trouwfotografie
                    </NuxtLink>
                    <NuxtLink to="/events" class="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Evenementen
                    </NuxtLink>
                    <NuxtLink to="/family" class="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Gezinsfotografie
                    </NuxtLink>
                  </div>
                </div>
             </div>
             <NuxtLink to="/about" class="transition-colors hover:text-foreground/80">Over Mij</NuxtLink>
             <NuxtLink to="/contact" class="transition-colors hover:text-foreground/80">Contact</NuxtLink>
           </nav>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t py-6 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Manis Fotografie. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script> 