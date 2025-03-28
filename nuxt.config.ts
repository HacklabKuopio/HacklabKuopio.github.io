// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Halko',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hacklab Kuopio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: "/",
  },
  nitro: {
    prerender: {
      routes: ['/', '/blog', '/privacy', '/member', '/organization']
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],

  ssr: true,

  components: [
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: false,
    config: {},
    viewer: true,
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
    '~/plugins/error-handler.ts'
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8000,
    https: {
      key: '.certs/server.key',
      cert: '.certs/server.cert'
    }
  },
  telemetry: false,
  debug: false,
  compatibilityDate: '2024-07-13',
  runtimeConfig: {
    public: {
      antispamDecryptKey: process.env.ANTISPAM_ENCRYPTION_KEY || 'ANTISPAM',
    }
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  typescript: {
    strict: false
  }
})