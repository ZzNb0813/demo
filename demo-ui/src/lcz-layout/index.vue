<template>
  <div class="lcz-layout" :class="[{'active':layoutDirection=='column'},{'is-required':required}]">
      <div  v-if="label" class="label"><span>{{label}}</span></div>
      <div  v-if="layoutDirection=='column' && description "   class="description"><span>{{description}}</span></div>
      <div class="content" :class="{'active':layoutDirection=='row'}">
          <slot></slot>
     </div>       
  </div>
</template>

<script>

export default {
  name: 'lcz-layout',
  props: {
    label: String,
    description:String,
    layoutDirection: {
      type: String,
      default: 'row'
    },
   required:{
      type:Boolean,
      default:false
    },
  },
  data: () => {
    return {
      title: ''
    };
  },
  mounted() {
    
  }
};
</script>

<style lang="scss">
 .lcz-layout{
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 4px 0px;
    background-color: #fff; 
 }
 .lcz-layout.active{
     flex-flow: column;
 }
 .lcz-layout.active .content,  .lcz-layout.active .label{
    width: 100%;   
 }
 .lcz-layout .label{
    font-size:14px;
    vertical-align: middle;
    flex: none;
    color: #4A4A4A;
    box-sizing: border-box;
    width: 90px;
    text-align: left;
    position: relative;
    padding-left: 16px;
 }


.lcz-layout.is-required .label:before {
    content: "*";
    color: #EE4446;
    position: absolute;
    left: 8px;
}

.description{
    color: #999;
    font-size: 12px;
    text-align: left;
    width: 100%;   
    margin-top: 4px;
    padding-left: 16px;
    box-sizing: border-box;
 }
.content.active{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.lcz-layout.active .van-field__control{
    padding-left: 4px;
}
</style>
