// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    [
      '@nuxt-modules/compression',
      {
        algorithm: 'gzip'
      }
    ]
  ],
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
  ],
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
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/adrianofrederico/image/upload/'
    }
  },
  tailwindcss: {
    viewer: true
  },
  typescript: {
    shim: false
  }
})
