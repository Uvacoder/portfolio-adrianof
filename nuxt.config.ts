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
    viewer: process.env.NODE_ENV !== 'production'
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || null,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || null,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || null,
    public: {
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    }
  }
})
