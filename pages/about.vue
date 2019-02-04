<template lang="pug">
<<<<<<< HEAD
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
          p.center.subtitle Historia del CUC
    script(src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous")
=======
    section.content.container.about
        .box.perfil
            .img-box
                img.radius.max-250.shadow(src="~/assets/image/my.jpg" alt="Alejandro")
            .sub-box
                h1.title Ahora un poco de mi
                p Soy un desarrollador web venezolano.
                p Inicie en el mundo de la programación con el lenguaje PHP y manejo distintas herramientas para desarrollar de la manera más rápida y efectiva.
                p He liderado a pequeños grupos de programadores para lograr los objetivos que nos plantean, usando la metodología SCRUM.
        .box.flex
            graph-circle(message="HTML/CSS" color="#31a4d5" prct="80")
            graph-circle(message="Git" color="#e94e31" prct="70")
            graph-circle(message="Vue.Js" color="#00b37d" prct="65")
            graph-circle(message="Laravel" color="#f34e39" prct="70")
            graph-circle(message="Wordpress" color="#217098" prct="70")
        .box.flex.estudios
            .card.w-2.shadow
                img.img-icon.radius(src="~/assets/image/platzi.png" alt="Platzi")
                p.center.subtitle En el año 2017, fui uno de las "1000" personas que fueron becadas por Platzi, allí realicé un muchos de cursos orientados al desarrollo web.
            .card.w-2.shadow
                img.img-icon.radius(src="~/assets/image/cuc.png" alt="CUC")
                p.center.subtitle En el año 2014 entre en el Colegio Universitario de Caracas y en el obtuve el título de "Ingeniero en Informática".

>>>>>>> 130a5e507119a304c79a62b7b856c2baefabb428
</template>

<script>

import GraphCircle from '~/components/GraphCircle.vue'

export default {
  components: {
    GraphCircle
  },
  data () {
      return {
         
      }
  },
}
</script>