<template lang="pug">
    section.content.container
        .box
            div.text-container
                h1.name.center ALEJANDRO BERBIN
            div.links.box
                a(href="instagram.com/alexcam_96/" target="_blank") 
                    i.fab.fa-instagram
                a( href="https://github.com/Aberbin96" target="_blank") 
                    i.fab.fa-github
                a( href="https://www.linkedin.com/in/alejandro-berbin/" target="_blank")
                    i.fab.fa-linkedin-in
                a( href="https://codepen.io" target="_blank")
                    i.fab.fa-codepen
                a( href="https://www.goodreads.com/" target="_blank")
                    i.fab.fa-goodreads-g
            span.description.center I'm a Web Developer. I'm looking to make people's projects a reality!
            
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
