<template lang="pug">
    section.content.container
        .box
            figure.max-250.m-center.yellow-border.radius
                img.img-responsive.radius(src="~/assets/image/my.jpg" alt="AlejandroInstagram")
            h1.center.title.m-0.coming-soon Alejandro Berbin
            h2.center.subtitle.m-0 Web Developer
            div.links.box
                a(href="instagram.com/alexcam_96/" target="_blank") 
                    i.fab.fa-instagram
                a( href="https://github.com/Aberbin96" target="_blank") 
                    i.fab.fa-github
                a( href="https://www.linkedin.com/in/alejandro-berbin/" target="_blank")
                    i.fab.fa-linkedin-in
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
  /* span.center.coming-soon{
      animation: mymove 1s infinite;
      animation-direction: alternate;
  }
    @keyframes mymove {
        from {transform: translateY(0px); }
        to {transform: translateY(.2em);}
    } */
</style>
