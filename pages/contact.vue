<template lang="pug">
    section.container.content
        .box.flex
            .card
                h1.center.title Hablemos!
                //- div.links
                //-     a(href="instagram.com/alexcam_96/" target="_blank") 
                //-         i.fab.fa-instagram
                //-     a( href="https://github.com/Aberbin96" target="_blank") 
                //-         i.fab.fa-github
                //-     a( href="https://www.linkedin.com/in/alejandro-berbin/" target="_blank")
                //-         i.fab.fa-linkedin-in
                p.center   Puedes hacerme cualquier pregunta sobre tecnologia, desarrollo de paginas, redes sociales, hardware, etc...
                form(action="https://formspree.io/contacto@alejandroberbin.com.ve" /*v-on:submit.prevent="SubmitForm"*/ target="_blank" method="POST")
                    .center
                        label ¿Cual es tu correo?
                    .input-form
                        input(type="email" name="_replyto")
                    .center
                        label ¡Hazme tu pregunta!
                    .input-form
                        textarea(name="_message")
                    .center
                        input(type="submit" value="Enviar")
</template>

<script>
/*import axios from 'axios'*/

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