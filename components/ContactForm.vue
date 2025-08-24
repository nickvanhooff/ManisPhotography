<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="space-y-4">
      <div class="grid gap-2">
        <label for="name" class="text-sm font-medium text-foreground">Naam</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Uw naam"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="email" class="text-sm font-medium text-foreground">E-mail</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="uw@email.nl"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="phone" class="text-sm font-medium text-foreground">Telefoonnummer</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="+31 (0)6 12345678"
        />
      </div>
      <div class="grid gap-2">
        <label for="message" class="text-sm font-medium text-foreground">Bericht</label>
        <textarea
          id="message"
          v-model="form.message"
          class="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Uw bericht"
          required
        ></textarea>
      </div>
    </div>
    <button
      type="submit"
      class="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90"
    >
      Verstuur Bericht
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script> 