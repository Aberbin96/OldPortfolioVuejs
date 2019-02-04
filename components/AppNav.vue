<template lang="pug">
    nav.nav
        span.mobile-menu(@click="ShowMenu") 
            i.fas.fa-bars
        ul#menu(v-bind:class="{ mobile_hidden: menu_mobile }")
            li(@click="ShowMenu")
                nuxt-link(to="/") Inicio
            li(@click="ShowMenu")
                nuxt-link(to="/about") Sobre Mi
            li 
                .block Portafolio
            li 
                .block Blog
            li 
                nuxt-link(to="/contact") Contacto
</template>
<script>
export default {
    data () {
        return {
            menu_mobile:true
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