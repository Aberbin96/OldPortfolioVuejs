<template lang="pug">
    div.app-layout 
      app-logo
      app-nav
      nuxt
      app-footer
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
import AppLogo from '~/components/AppLogo.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppLogo,
    AppNav,
    AppFooter
  },
    head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
      ]
    }
  }
}
</script>