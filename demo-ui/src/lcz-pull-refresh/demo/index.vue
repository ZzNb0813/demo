<template>
  <demo-section>
    <demo-block title="基础用法">
      <lcz-pull-refresh  class="pull-refresh" v-model="isLoading" @refresh="onRefresh">
          <p style="padding-left:16px">刷新次数: {{ count }}</p>
      </lcz-pull-refresh>
    </demo-block>
  </demo-section>
</template>


<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }
}
</script>

<style lang="less">
 .pull-refresh{
    height: 300px;
  }
</style>