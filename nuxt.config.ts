// https://nuxt.com/docs/api/configuration/nuxt-config
// Этот файл должен быть в ts, но все остальное приложение можно писать и на js
export default defineNuxtConfig({
  app: {
    head: {
      title: 'KIP PRO',
      meta: [
        {
          name: 'description', content: 'kip, pro, котел'
        }
      ]
    }
  }
})
