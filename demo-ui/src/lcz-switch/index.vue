<template>
  <div class="lcz-switch">
    <switch-lcz v-model="checked" />
  </div>
</template>

<script>
import { Switch } from 'vant';

export default {
  name: 'lcz-switch',
  components: {
    switchLcz: Switch,
  },
  data: () => ({
    checked: true,
    value: 3,
  }),
};
</script>

<style lang="scss">
.lcz-switch {
  padding: 4px 16px;
}
</style>
