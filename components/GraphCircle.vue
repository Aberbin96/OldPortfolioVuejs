<template lang="pug">
    .single-chart(:data-prct="prct" :class="currentSize")
        svg(viewBox="0 0 36 36" class="circular-chart priority--small")
          path.circle-bg(d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831")
          path.circle(d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" :stroke-dasharray="prct" :style="Stylecolor")
          text.percentage(x="50%" y="53%" text-anchor="middle") {{message}}
</template>
<script>
export default {
  data () {
      return {
      } 
  },
  /*methods:{
        calculateSize() {
            let val = this.prct
            let r = 90;
            let c = Math.PI*(r*2);
            if (val < 0) { val = 0;}
            if (val > 100) { val = 100;}
            let pct = ((100-val)/100)*c;
            return pct+"px";
  	    }
  },*/
  computed: {
    Stylecolor: function () {
      return "stroke:"+this.color
    },
    /*Size: function () {
      return this.calculateSize()
    },*/
  },
  props: ['message','color','prct','currentSize'],
}
</script>

<style>

</style>
