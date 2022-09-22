// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {
            config: './tailwind.config.ts'
          },
          autoprefixer: {}
        }
      }
    }
  },
  css: ['@/assets/css/main.scss'],
  tailwindcss: {
    viewer: true
  },
  typescript: {
    shim: false
  }
})
