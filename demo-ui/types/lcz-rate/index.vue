<template>
  <div>
    <Rate  v-model="value" />
  </div>
</template>

<script>
import { Rate } from 'vant';
export default {
  name: 'lcz-rate',
  components: { Rate },
  props: {
    label: String,
    value: String,
    direction: {
      type: String,
      default: 'row'
    },
  },
  data() {
    return {
      value: 3,
    };
  },
  mounted() {
    
  },
  methods:{
    input(value){ 
     console.log(this.value);
     this.$emit('input',value);
    }

  }
};
</script>

<style lang="scss">
</style>
