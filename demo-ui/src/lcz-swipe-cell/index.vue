<template>
    <swipe-cell>
      <Cell :border="false" title="单元格" value="内容" />
       <template #right>
          <slot name="right"></slot>
      </template>
    </swipe-cell>
</template>

<script>
import { SwipeCell, Cell} from 'vant';

export default {
  name: 'lcz-swipe-cell',
  components: {
     SwipeCell,
     Cell,
  },
  props: {
    
  },
  data() {
    return {
    };
  },
  methods: {
   
  },  
};
</script>
