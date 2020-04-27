# LczLayout 布局方式

### 介绍

LczLayout lczCreator 的布局组件

### 引入

```js
import Vue from 'vue';
import { LczLayout } from 'createrUI';

Vue.use(LczLayout);
```

## 代码演示

### 基础用法

```html
 <lcz-layout label="布局方式" direction="row" > </lcz-layout>      
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | 标题 |  *string*  |  无 |
| direction `6.7.1` | 显示方式 (上下、左右)| *string*  |  `row`|
| required `6.7.1` | 是否必填| *boolean*  |  `false`|
| description | 描述信息| *string*  |  `-`|

