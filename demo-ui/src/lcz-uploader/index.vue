<template>
  <div class="lcz-uploader">
    <uploader  />
  </div>
</template>

<script>
import { Uploader } from 'vant';

export default {
  name: 'lcz-uploader',
  components: {
    Uploader
  },
  data: () => ({
   
  }),
};
</script>

<style lang="scss">
.lcz-uploader {
  padding: 4px 16px;
}
</style>
