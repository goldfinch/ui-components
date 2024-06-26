import { createResolver } from '@nuxt/kit'
import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      prefix: '',
      path: resolve('./components/base'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./components/icon'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./components/form'),
      global: false,
    },
  ],

  hooks: {
    // @ts-expect-error - hook is handled by nuxtjs/tailwindcss
    'tailwindcss:config'(config: Config) {
      withShurikenUI(config)
    },
  },

  devtools: {
    enabled: false,
  },
})
