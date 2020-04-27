# LczPicker  选择器

### 介绍

LczPicker  选择器

### 引入

```js
import Vue from 'vue';
import { LczPicker } from 'createrUI';

Vue.use(LczPicker);
```

## 代码演示

### 基础用法

```html
<lcz-picker :columns ="columns" v-model="value"  label="基础用法" placeholder="选择一个值" />
```

```js
export default {
  data() {
    return {
       columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
       value:''
     },
  },
   methods: {
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    },
  }
}
```

### 默认选中项
单列选择时，可以通过default-index属性设置初始选中项的索引
```html
<lcz-picker :columns ="columns" v-model="value"  :default-index="2"  label="默认选中项" placeholder="选择一个值" />
```


### 自定义按钮名称
```html
  <lcz-picker :columns ="columns" cancel-button-text ="不要" title ="你要不要"  confirm-button-text = "要" v-model="value"   label="自定义名称" placeholder="选择一个值"  />
```

### 多列选择
通过columns属性可以配置多列选择
```html
  <lcz-picker :columns ="columns"  v-model="value"   label="多列选择" placeholder="多列选择"  />
```

```js
export default {
  data() {
    return {
        columns: [
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
    },
   }
}
```



## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| columns | 对象数组，配置每一列显示的数据 | *Column[]*  | `[]` |
| placeholder | 占位提示文字 | *string*  | - |
| label | 标题 |  *string*  |  无 |
| layout-direction  | 显示方式 (上下、左右)| *string*  |  `row`|
| title | 顶部栏标题	 | *string*  | - |
| confirm-button-text	 | 确认按钮文字	 |  *string*  |  `确认` |
| cancel-button-text	 | 取消按钮文字	| *string*  |  `取消`|
| default-index	 | 单列选择时，默认选中项的索引		| *number \| string*  |  `0`|
| required `6.7.1` | 是否必填| *boolean*  |  `false`|
| description | 描述信息| *string*  |  `-`|



###  Events

| 事件名 | 说明 | 回调参数 
|------|------|------|
| confirm | 点击完成按钮时触发	  	 |单列：选中值，选中值对应的索引  <br/>  多列：所有列选中值，所有列选中值对应的索引 |
| cancel |  点击取消按钮时触发	  	 |单列：选中值，选中值对应的索引  <br/>  多列：所有列选中值，所有列选中值对应的索引 |
| change | 当绑定值变化时触发的事件	  |单列：Picker 实例，选中值，选中值对应的索引 <br/>  多列：Picker 实例，所有列选中值，当前列对应的索引 |
