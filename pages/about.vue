<template lang="pug">
    section.content.container.about
        .box.perfil
            .img-box
                img.radius.max-250.shadow(src="~/assets/image/my.jpg" alt="Alejandro")
            .sub-box
                h1.title Ahora un poco de mi
                p Soy un desarrollador web venezolano.
                p Inicie en el mundo de la programación con el lenguaje PHP y manejo distintas herramientas para desarrollar de la manera más rápida y efectiva.
                p He liderado a pequeños grupos de programadores para lograr los objetivos que nos plantean, usando la metodología SCRUM.
        .box.flex.f-just-b
            graph-circle(message="Git" color="#e94e31" prct="70" class="small")
            graph-circle(message="HTML / CSS" color="#31a4d5" prct="80" class="big")
            graph-circle(message="Vue.Js" color="#00b37d" prct="65" class="small")
            graph-circle(message="Wordpress" color="#217098" prct="70" class="big")
            graph-circle(message="Laravel" color="#f34e39" prct="70" class="small")
        .box.flex.estudios
            .card.w-2.shadow
                img.img-icon.radius(src="~/assets/image/platzi.png" alt="Platzi")
                p.center.subtitle En el año 2017, fui uno de las "1000" personas que fueron becadas por Platzi, allí realicé un muchos de cursos orientados al desarrollo web.
            .card.w-2.shadow
                img.img-icon.radius(src="~/assets/image/cuc.png" alt="CUC")
                p.center.subtitle En el año 2014 entre en el Colegio Universitario de Caracas y en el obtuve el título de "Ingeniero en Informática".
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