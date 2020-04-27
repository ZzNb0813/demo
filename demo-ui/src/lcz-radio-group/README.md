# LczRadioGroup 单选组控件

### 介绍

LczRadioGroup  单选组控件

### 引入

```js
import Vue from 'vue';
import { LczRadioGroup } from 'createrUI';

Vue.use(LczRadioGroup);
```

## 代码演示

### 基础用法

```html
<lcz-radio-group   v-model="radio"  :data-options="data"  />
```

```js
export default {
  data() {
    return {
         radio: 'a',
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
  },
};
```

### 禁用状态

```html
<lcz-radio-group   :data-options="data"   v-model="radio" disabled />
```

### 水平排列
将direction属性设置为horizontal后，复选框组会变成水平排列
```html
 <lcz-radio-group  :data-options="data"   v-model="radio" direction="horizontal" />
```


### 自定义数据
自定义数据包括 形状、文本位置、单个禁用等
```html
 <lcz-radio-group :data-options="dataOptions"   v-model="radio"  />
```

```js
export default {
  data() {
    return {
       radio: 'a',
      dataOptions:[
      { 
        alias:'单选框a',
        name:'a',
        disabled:true,
        shape:"round",
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
        shape:"square",
        labelPosition:'right',
      }
    ]
     }
  },
};
```


### 自定义标题
自定义标题
```html
 <lcz-radio-group   label="单选框组"  :data-options="data"   v-model="radio"/>
```


### 自定义标题布局
自定义标题布局
```html
 <lcz-radio-group  layout-direction="column"  label="单选框组"  :data-options="data" v-model="radio"/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| shape | 形状，可选值为 square |  *string*| `round`|
| disabled | 是否禁用复选框 |  *boolean*| `false`|
| label-position | 文本位置，可选值为 left |  *string*| `false`|


###  radio-group Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model (value) | 所有选中项的标识符|*any[]* |  -|
| disabled | 是否禁用所有复选框 |  *boolean*| `false`|
| direction `6.7.1` | 显示方式 (上下、左右)| *string*  |  `column`|
| icon-size | 所有复选框的图标大小，默认单位为px |  *number\|string*| `20px`|
| checked-color `6.7.1` |所有复选框的选中状态颜色| *string*  |  `#1989fa`|
| label| 自定义标题|  *string*| -|
| layout-direction |自定义标题布局 可选择为 `column` | *string*  |  `row`|
| required `6.7.1` | 是否必填| *boolean*  |  `false`|
| description | 描述信息| *string*  |  `-`|

###  Events

| 事件名 | 说明 | 回调参数 
|------|------|------|
| change | 当绑定值变化时触发的事件	|*names: any[]* |
