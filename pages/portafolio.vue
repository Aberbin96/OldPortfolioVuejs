<template lang="pug">
  section.container
    img.img-perfil(src="https://scontent-lga3-1.cdninstagram.com/vp/9bf6173cde1f0f92a77f4cda63bf9c56/5CD966C3/t51.2885-19/29400543_183920785749802_8425297642161963008_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="AlejandroInstagram")
    h1.center.title Alejandro Berbin
    h2.center.subtitle Portafolio
    div.links
      a(href="instagram.com/alexcam_96/" target="_blank") 
        i.fab.fa-instagram
      a( href="https://twitter.com/alejandroB_96" target="_blank") 
        i.fab.fa-twitter
      a( href="https://github.com/Aberbin96" target="_blank") 
        i.fab.fa-github
      a( href="https://www.linkedin.com/in/alejandro-berbin/" target="_blank")
        i.fab.fa-linkedin-in
    span.center.coming-soon ¡Coming Soon!
</template>

<script>
import AppMyName from '~/components/AppMyName.vue'

export default {
  components: {
    AppMyName
  }
}
</script>