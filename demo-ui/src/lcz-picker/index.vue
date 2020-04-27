<template>
  <lcz-layout :label="label"  :layout-direction="layoutDirection" :required="required" :description="description">
    <div class="lcz-picker">
         <Field
            readonly
            clickable
           :class="{'field-active':layoutDirection == 'row'}"
            v-model="dFvalue"
           :placeholder="placeholder"
            @click="showPicker = true"
            right-icon="arrow"
            clearable
        />
         
       <Icon name="clear" color="#969799"  class="field-icon"  @click="handClear" v-if="dFvalue"/>
       <Icon name="arrow" color="#969799"  class="field-icon"  @click="showDatetime = true"  v-else/>

        <Popup v-model="showPicker" position="bottom" get-container="body">
           <Picker
             show-toolbar
            :columns="columns"
            :title ="title"
            :confirm-button-text ="confirmButtonText"
            :cancel-button-text ="cancelButtonText"
            :default-index="defaultIndex"
            @change="onChange"
            @cancel=" onCancel"
            @confirm="onConfirm"
          />
        </Popup>
    </div>
  </lcz-layout>
</template>


<script>
import { Picker, Popup, Field, Icon} from 'vant';
export default {
  name: 'lcz-picker',
  components: {
    Picker,
    Popup,
    Field,
    Icon
  },
  props: {
    columns:{
      type:Array,
      default:(()=>{
        return [];
      })
    },
    label: String,
    layoutDirection: {
      type: String,
      default: 'row'
    },
    value: String,
    placeholder:String,
    title:String,
    confirmButtonText:{
      type: String,
      default: '确定'
    },
    cancelButtonText:{
      type: String,
      default: '取消'
    },
    defaultIndex:{
      type:[String, Number],
      default:0
    },
    required:{
      type:Boolean,
      default:false
    },
    description:String
  },
  data () {
     return {
      dFvalue: this.value,
      showPicker: false,
    }
  },
  mounted() {
     console.log(this.layoutDirection)
  },
  methods: {
     onChange(picker, value, index) {
       this.$emit('change',picker, value, index);
     },
     onConfirm(value, index) {
      this.$emit('input',value)
      this.$emit('confirm',value, index)
      this.showPicker = false;
    },
    onCancel(value, index){
      this.$emit('cancel',value, index) 
      this.showPicker = false;
    },
    handClear(){
     this.$emit('input','')
    },

  },
  watch:{
    value(val){
      this.dFvalue = val;
    }
  }
};
</script>

<style lang="scss">
.lcz-picker .field-active .van-field__control{
   text-align: right;
}

.lcz-picker{
  position: relative;
}

.field-icon{
    position: absolute;
    right: 16px;
    top: 13.5px;
    cursor: pointer;
}
.lcz-picker .van-field__right-icon{
  visibility:hidden;
}



</style>
