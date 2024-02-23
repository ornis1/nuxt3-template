// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL || '/',
    cdnURL: process.env.NUXT_APP_CDN_URL || '',
    head: {
      title: 'Nuxt3Template',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    url: process.env.PORT || '3000',
    host: process.env.PORT || '0.0.0.0',
    https: {
      cert: './cert/cert.pem',
      key: './cert/key.pem',
    },
  },
  css: ['~/src/assets/css/main.css'],
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  // debug: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    public: {
      host: process.env.HOST || '0.0.0.0',
      port: process.env.HOST || '3000',
      nodeEnv: process.env.NODE_ENV || 'development',
      apiUrl: process.env.API_URL || '',
      baseUrl: process.env.BASE_URL || '/',
    },
  },
})
