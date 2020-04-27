<template>
        <Button 
           :type="type" 
           :size="size" 
           :color="color"
           :square="square"
           @click="handClick" >
           <slot></slot>
        </Button>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'lcz-button',
  components: { Button },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size:{
      type: String,
      default: 'normal'
    },
    color:String,
    square:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
     
    };
  },
  mounted() {
    
  },
   methods:{
     handClick(){
       this.$emit('click')
     }
  }
  
};
</script>

<style lang="scss">

</style>
