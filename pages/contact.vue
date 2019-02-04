<template lang="pug">
    section.container.content
        .box.flex
            .card.w-2
                h1.center.title Contacto
                p.center   Puedes hacerme cualquier pregunta sobre tecnologia, desarrollo de paginas, redes sociales, hardware, etc...
                form(action="https://formspree.io/contacto@alejandroberbin.com.ve" /*v-on:submit.prevent="SubmitForm"*/ target="_blank" method="POST")
                    .center
                        label ¿Cual es tu nombre?
                    .input-form
                        input(type="text" name="name")
                    .center
                        label ¿Cual es tu correo?
                    .input-form
                        input(type="email" name="_replyto")
                    .center
                        label ¿Que me quieres preguntar?
                    .input-form
                        select(name="_type")
                            option(value="") Seleccione una opcion...
                            option(value="Asesoria") Asesoria
                            option(value="Presupuesto") Presupuesto
                    .center
                        label ¡Hazme tu pregunta!
                    .input-form
                        textarea(name="_message")
                    .center
                        input(type="submit" value="Enviar")
            .w-2
                h1.center.title Redes Sociales
                div.links
                    a(href="instagram.com/alexcam_96/" target="_blank") 
                        i.fab.fa-instagram
                    a( href="https://github.com/Aberbin96" target="_blank") 
                        i.fab.fa-github
                    a( href="https://www.linkedin.com/in/alejandro-berbin/" target="_blank")
                        i.fab.fa-linkedin-in
                h2.center.subtitle Email
                h3.center.subtitle contacto@alejandroberbin.com.ve
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
        /*    obj : {name: '', _replyto: '', _type:'', _message:''}*/
        } 
    },
    methods:{
        /* SubmitForm() {
            console.log(event.target.action)
            axios.get(`https://swapi.co/api/people/1/`).then((response) => {
                console.log(response.data)
            })
            axios({
                method: 'post',
                url: event.target.action,
                data: this.createdFormData()
            })
            .then((response) => {
                    console.log(response.data)   
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        createdFormData : function (){
            let formDa = new FormData();
            for(let key in this.obj){
                formDa.append(key, this.obj[key]);
            }
            return {
                name: 'Ale',
                description: 'Hey'
            };
        },*/
    },
}
</script>