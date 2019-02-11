<template lang="pug">
    a.c-preview
        .c-preview__img( :class="componentclass" )
        h3.c-preview__title.center {{message}}
</template>
<script>

export default {
  data () {
      return {
      } 
  },
  methods:{
        /*
    finishPieceanimation() {
        ++pieceCompleteCount;
        if(pieceCompleteCount == pieceCount) {
            delay = setInterval(nextSlide, 1000);
        }
    }*/
  },
  computed: {
  },
  props: ['message','color','componentclass']
}
</script>