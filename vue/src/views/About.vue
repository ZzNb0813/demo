<template>
  <div class="about">
    <input type="text" v-model="value" />

  </div>
</template>
<script>
export default {
 name: 'About',

  data() {
      return {
        value: ''
      };
  },
  methods:{
     go(){
      window.location.href ="https://www.baidu.com/"
     },
   
  }
}
</script>
