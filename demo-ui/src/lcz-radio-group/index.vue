
<template>
<lcz-layout :label="label"  :layout-direction="layoutDirection"  :required="required" :description="description">
    <div>
      <radio-group class="lcz-radio-group"
        v-model="radio" 
        :direction="direction"
        @change="handChange"
        :disabled ="disabled"
        :checked-color ="checkedColor"
        :icon-size="iconSize" 
      >
        <radio  v-for="(item, index) in dataOptions" :key="index" :name="item.name" :shape="item.shape"  :disabled="item.disabled"  :label-position="item.labelPosition">
             {{item.alias}}
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
        </radio>
      </radio-group>
    </div>   
 </lcz-layout>
</template>

<script>
import { RadioGroup, Radio } from 'vant';

export default {
  name: 'lcz-radio-group',
  components: {
    RadioGroup,
    Radio
  },
  props: {
    label:String,
    layoutDirection: {
    type: String,
    default: 'row'
    },
    dataOptions:{
      type:Array,
      default:(() =>{
        return []
      })
    },
    value:String,
    direction: String,
    checkedColor:{
      type: String,
      default: '#1989fa',
    },
    iconSize:{
      type: [String,Number],
      default: '20px',
    },
     disabled:{
      type:Boolean,
      default:false
    },
    required:{
      type:Boolean,
      default:false
    },
    description:String
  },
  data () {
    return {
     radio:this.value,
     activeIcon: './../../public/img/icon/radio_ck.png',
     inactiveIcon: './../../public/img/icon/radio.png',
    }
  },
  mounted() {
  },
  methods:{
     handChange(names){
       this.$emit('input',names)
       this.$emit('change')
     }
  }
};
</script>

<style lang="scss">
.lcz-radio-group {
  padding: 4px 16px;
  font-size: 14px;
  background-color: #fff;

  .van-radio {
    margin: 8px 4px;
  }
  .van-radio__icon{
    font-size: 16px !important;
  }
}

.img-icon {
   height: 16px;
 }

</style>
