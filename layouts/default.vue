<template lang="pug">
    div.app-layout 
      app-nav
      nuxt
</template>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131746944-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131746944-1');
</script>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav,
  },
    head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pathway+Gothic+One|Playfair+Display' }
      ]
    }
  }
}
</script>