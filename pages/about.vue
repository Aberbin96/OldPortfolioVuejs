<template lang="pug">
    section.content.container.about
        .box.perfil
            figure.img-thum
                img.img-responsive.radius.shadow(src="~/assets/image/my.jpg" alt="Alejandro")
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
        .box.estudios.flex-cover
                .card.shadow
                    figure.img-icon.m-center
                        img.radius.img-responsive(src="~/assets/image/platzi.png" alt="Platzi")
                    p.center.m-0.right.card-center-text Mi experiencia en Platzi
                .card.shadow
                    figure.img-icon.m-center
                        img.radius.img-responsive(src="~/assets/image/cuc.png" alt="CUC")
                    p.center.m-0.right.card-center-text Mi experiencia en la Universidad
                .card.shadow
                    figure.img-icon.m-center
                        img.radius.img-responsive(src="~/assets/image/cuc.png" alt="CUC")
                    p.center.m-0.right.card-center-text Mi experiencia en la Universidad
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