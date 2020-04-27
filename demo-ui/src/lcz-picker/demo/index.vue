<template>
  <demo-section>
      <demo-block title="基础用法">
           <lcz-picker :columns ="columns" v-model="value"  label="基础用法" placeholder="选择一个值"  @change="onChange" />
      </demo-block>
      
       <demo-block title="默认选中项">
           <lcz-picker :columns ="columns" v-model="value1"  :default-index="2"  label="默认选中项" placeholder="选择一个值"  @change="onChange" />
      </demo-block>

      <demo-block title="自定义按钮名称">
           <lcz-picker :columns ="columns1" cancel-button-text ="不要" title ="你要不要"  confirm-button-text = "要" v-model="value2"   label="自定义名称" placeholder="选择一个值"  />
      </demo-block>

      <demo-block title="多列选择">
           <lcz-picker :columns ="columns2"  v-model="value3"   label="多列选择" placeholder="多列选择"  />
      </demo-block>


  </demo-section>
</template>


<script>
export default {
  data: () => ({
     columns:  ['杭州', '宁波', '温州', '嘉兴', '湖州'],
     columns1: ['钢蛋', '铁蛋', '鸡蛋', '鸭蛋'],
     columns2: [
        // 第一列
        {
          values: ['周一', '周二', '周三', '周四', '周五'],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1,
        },
      ],
     value:'',
     value1:'',
     value2:'',
     value3:''
  }),
  watch:{
    
  },
   methods:{
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    },
   }
};
</script>


