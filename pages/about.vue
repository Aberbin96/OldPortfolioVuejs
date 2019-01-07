<template lang="pug">
  section.container.about
    .box-perfil
      .img-box
        img.radius(src="https://scontent-lga3-1.cdninstagram.com/vp/9bf6173cde1f0f92a77f4cda63bf9c56/5CD966C3/t51.2885-19/29400543_183920785749802_8425297642161963008_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="AlejandroInstagram")
      h1.title Ahora un poco de mi
      p Soy un desarrollador venezolano, inicie con el lenguaje PHP e ingrese al mundo de las aplicaciones y paginas web, manejo distintas herramientas para desarrollar estos proyectos de la manera mas rapida y efectiva; he estado en un proceso de aprendizaje a otros lenguajes tales como PYTHON y Javascript, he liderado a pequeños grupos de programadores para lograr los objetivos de la empresa.
    .box-aptitudes
      parrafo
        h1.center.title Aptitudes
        p.center.subtitle html
        p.center.subtitle css
        p.center.subtitle js
        p.center.subtitle vue
        p.center.subtitle php
        p.center.subtitle wordpress
        p.center.subtitle laravel
        p.center.subtitle git
    .box-estudios
      parrafo
        h1.center.title Estudios
        p.center.subtitle cuc
        p.center.subtitle platzi
</template>

<script>
import AppMyName from '~/components/AppMyName.vue'

export default {
  components: {
    AppMyName
  }
}
</script>