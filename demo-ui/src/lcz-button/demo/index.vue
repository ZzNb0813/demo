<template>
  <demo-section class="van-doc-demo-section demo-button">
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <lcz-button type="default">默认按钮</lcz-button>
        <lcz-button type="primary">主要按钮</lcz-button>
        <lcz-button type="info" @click="handClick">信息按钮</lcz-button>
      </div>
        <lcz-button type="warning">警告按钮</lcz-button>
        <lcz-button type="danger">危险按钮</lcz-button>
    </demo-block>

      <demo-block title="自定义颜色">
        <lcz-button  color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</lcz-button>
    </demo-block>


  </demo-section>
</template>

<script>
export default {
  methods:{
     handClick(){
      console.log('123')
     }
  }
}
</script>



<style lang="scss">
 .demo-button-row{
   margin-bottom: 12px;
 }
.demo-button .van-button--small, .demo-button .van-button--normal:not(:last-child) {
    margin-right: 16px;
}
</style>
