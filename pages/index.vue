<template lang="pug">
  section.container
    div
      app-logo
      app-nav
      app-my-name
      h1.title Portafolio
      h2.subtitle Portafolio de Alejandro Berbin
      div.links
        a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        a.button--grey( href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppNav from '~/components/AppNav.vue'
import AppMyName from '~/components/AppMyName.vue'

export default {
  components: {
    AppLogo,
    AppNav,
    AppMyName
  }
}
</script>