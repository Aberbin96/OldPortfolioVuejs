<template lang="pug">
  section.content.container.about
    .box.perfil
      .img-box
        img.radius.max-250.shadow(src="~/assets/image/my.jpg" alt="AlejandroInstagram")
      .sub-box
        h1.title Ahora un poco de mi
        p Soy un desarrollador venezolano, inicie con el lenguaje PHP e ingrese al mundo de las aplicaciones y paginas web, manejo distintas herramientas para desarrollar estos proyectos de la manera mas rapida y efectiva; he estado en un proceso de aprendizaje a otros lenguajes tales como PYTHON y Javascript, he liderado a pequeños grupos de programadores para lograr los objetivos de la empresa.
    .box.aptitudes
      #cont(data-pct="100")
        svg#svg(width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg")
          circle(r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0")
          circle#bar(r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0")
    .box.flex.estudios
        .card.shadow
          img.img-icon.radius(src="~/assets/image/platzi.png" alt="Platzi")
          p.center.subtitle Historia de Platzi
        .card.shadow
          img.img-icon.radius(src="~/assets/image/cuc.png" alt="CUC")
          p.center.subtitle HIstoria del CUC
    script(src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous")
</template>

<script>

import AppMyName from '~/components/AppMyName.vue'

export default {
  components: {
    AppMyName
  },
  data () {
      return {
         
      }
  },
}
</script>