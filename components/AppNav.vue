<template lang="pug">
    nav.nav
        span.mobile-menu(@click="ShowMenu") 
            i.fas.fa-bars
        ul#menu(v-bind:class="{ mobile: menu_mobile }")
            li 
                nuxt-link(to="/") Inicio
            li 
                nuxt-link(to="/about") Sobre Mi
            li 
                nuxt-link.block(to="/portafolio") Portafolio
            li 
                nuxt-link.block(to="/blog") Blog
            li 
                nuxt-link.block(to="/contact") Contacto
</template>
<script>
export default {
    data () {
        return {
            menu_mobile:false
        }
    },
    methods:{
        ShowMenu() {
            this.menu_mobile = (this.menu_mobile)? false : true;
  	    }
    },
    computed: {
        Stylecolor: function () {
            return "stroke:"+this.color
        },
        Size: function () {
            return this.calculateSize()
        },
    },
    props: ['message','color','prct'],
}
</script>