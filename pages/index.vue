<template lang="pug">
    section.content.container
        img.img-perfil.radius.max-200(src="~/assets/image/my.jpg" alt="AlejandroInstagram")
        h1.center.title.m-0 Alejandro Berbin
        h2.center.subtitle.m-0 Web Developer
        div.links
            a(href="instagram.com/alexcam_96/" target="_blank") 
                i.fab.fa-instagram
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
<style>
  span.center.coming-soon{
      animation: mymove 2s infinite;
      animation-direction: alternate;
  }
    @keyframes mymove {
        from {transform: translateY(0px); }
        to {transform: translateY(20px);}
    }
</style>
