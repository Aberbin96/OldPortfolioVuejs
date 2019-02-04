<template lang="pug">
    #cont(:data-message="message" :data-prct="prct")
        svg#svg(width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg")
          circle(r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0")
          circle#bar(r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" :stroke-dashoffset="Size" :style="Stylecolor")
</template>

<script>
export default {
  data () {
      return {

      }
  },
  methods:{
        calculateSize() {
            let val = this.prct
            let r = 90;
            let c = Math.PI*(r*2);
            if (val < 0) { val = 0;}
            if (val > 100) { val = 100;}
            let pct = ((100-val)/100)*c;
            return pct+"px";
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