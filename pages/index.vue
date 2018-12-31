<template lang="pug">
  section.container
    div
      h1.title Portafolio
      h2.subtitle Portafolio de Alejandro Berbin
      div.links
        a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        a.button--grey( href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
      app-my-name
</template>

<script>
import AppMyName from '~/components/AppMyName.vue'

export default {
  components: {
    AppMyName
  }
}
</script>