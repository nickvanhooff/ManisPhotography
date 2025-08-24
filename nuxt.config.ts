// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image'
  ],

  image: {
    quality: 60,
    format: ['avif', 'webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    },
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sharp: {
        avif: {
          quality: 60,
          effort: 4
        }
      }
    }
  },
  

  app: {
    head: {
      title: 'Manis Fotografie',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professionele fotografie voor al uw momenten' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': { 
        headers: { 
          'Cache-Control': 'public, max-age=31536000, immutable' 
        } 
      }
    }
  },

  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router', 'pinia']
          }
        }
      }
    }
  },

  compatibilityDate: '2025-04-13'
})
