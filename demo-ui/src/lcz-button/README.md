# LczLayout 布局方式

### 介绍

LczLayout lczCreator 的布局组件

### 引入

```js
import Vue from 'vue';
import { LczButton } from 'createrUI';

Vue.use(LczButton);
```

## 代码演示

### 按钮类型

```html
<div class="demo-button-row">
  <lcz-button type="default">默认按钮</lcz-button>
  <lcz-button type="primary">主要按钮</lcz-button>
  <lcz-button type="info">信息按钮</lcz-button>
</div>
  <lcz-button type="warning">警告按钮</lcz-button>
  <lcz-button type="danger">危险按钮</lcz-button>
```

### 自定义颜色

```html
  <lcz-button  color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</lcz-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `primary`  `info` `warning` `danger` |  *string*  |  `default` |
| size | 尺寸，可选值为 `large` `small` `mini`| *string*  |  `normal`|
| color | 按钮颜色，支持传入linear-gradient渐变色| *string*  |  `-`|
