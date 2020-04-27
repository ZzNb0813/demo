<template>
     <pull-refresh v-model="dFvalue"  @refresh="onRefresh">
        <slot></slot>   
     </pull-refresh>
</template>

<script>
import { PullRefresh,Toast } from 'vant';

export default {
  name: 'lcz-pull-refresh',
  components: {
     PullRefresh
  },
  props: {
    value:{
      type:Boolean,
      default:false
    },
  },
  data() {
    return {
      dFvalue: this.value,
    };
  },
  methods: {
    onRefresh() {  
      this.$emit('refresh')
    },
  },  
 watch:{
    value(val){
      this.dFvalue = val;
    },
    dFvalue(val){
       this.$emit('input', val)
    }
  }

};
</script>
