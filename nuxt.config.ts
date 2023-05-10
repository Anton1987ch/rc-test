// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
      head:{
        link: [
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com',crossorigin:'' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap' }
        ],
        // meta:[
        //   {name:'viewport',content:'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'}
        // ]
      }
    },
    css: ["@/assets/css/styles.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    modules: [
      // ...
      '@pinia/nuxt',
      'nuxt-swiper',
      '@vite-pwa/nuxt',
      // '@sidebase/nuxt-auth'
    ],
    pwa: {
     manifest:{
        name:'РЦ',
        short_name:'РЦ',
        description:'РЦ',


     },
     workbox:{
        navigateFallback:'/'
     },
     devOptions:{
      enabled: true,
      type:'module'
     }
    },
    swiper: {
      // Swiper options
      //----------------------
      // prefix: 'Swiper',
      // styleLang: 'css',
      modules: ['navigation', 'pagination',"effect-fade"],
    },
   
})
