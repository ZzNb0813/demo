<template>
  <demo-section>
    <demo-block title="基础用法">
      <lcz-swipe-cell>
          <template #right>
              <lcz-button   square  type="info">修改</lcz-button>
              <lcz-button   square  type="danger">删除</lcz-button>
          </template>
     </lcz-swipe-cell>
    </demo-block>
  </demo-section>
</template>


<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {
    
  }
}
</script>

<style lang="less">

</style>