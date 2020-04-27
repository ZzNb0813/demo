<template>
  <demo-section>
      <demo-block title="基础用法">
        <lcz-radio-group  layoutDirection='column'  :data-options="data"   v-model="radio"/>
      </demo-block>

      <demo-block title="禁用状态">
        <lcz-radio-group  layoutDirection='column' :data-options="data"  v-model="radio"  disabled />
      </demo-block>

     <demo-block title="水平排列">
       <lcz-radio-group  layoutDirection='column' :data-options="data" v-model="radio"  direction="horizontal" />
    </demo-block>

      <demo-block title="自定义结构">
       <lcz-radio-group  layoutDirection='column'  :data-options="dataOptions"  v-model="radio"   />
     </demo-block>

     <demo-block title="标题">
        <lcz-radio-group   label="单选框组"  direction="horizontal"  :data-options="data"   v-model="radio"/>
     </demo-block>

     <demo-block title="自定义标题布局">
       <lcz-radio-group  layout-direction="column" :required="required" direction="horizontal"  label="单选框组"  :data-options="data"   v-model="radio"/>
     </demo-block>

  </demo-section>
</template>


<script>
export default {
  data: () => ({
    radio: 'a',
    required:true,
    data:[
      { 
        alias:'单选框a',
        name:'a',
       
      },
      { 
        alias:'单选框b',
        name:'b',
      },
    ],
    dataOptions:[
      { 
        alias:'单选框a',
        name:'a',
        disabled:true,
        shape:"square",
        labelPosition:'left',
      },
      { 
        alias:'单选框b',
        name:'b',
        disabled:false,
        shape:"round",
        labelPosition:'right',
      },
      { 
        alias:'单选框c',
        name:'c',
        disabled:false,
        shape:"round",
        labelPosition:'right',
      }
    ]

  }),
  watch:{
    radio(val){
      console.log(val+'v-model测试')
    }
  },
   methods:{
    
   }
};
</script>


