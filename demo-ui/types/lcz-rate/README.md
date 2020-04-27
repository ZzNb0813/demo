# LczInput 输入框

### 介绍

LczInput lczCreator 的输入框组件

### 引入

```js
import Vue from 'vue';
import { LczInput } from 'createrUI';

Vue.use(LczInput);
```

## 代码演示

### 基础用法

```html
<lcz-input label="输入框" flex-direction="column" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model (value) | 当前输入的值 |*string number*  | `-` |
| type | 输入框类型 | | `text` |
|  flex-direction `6.7.1` | 显示方式 (上下、左右)| *string*  |  `column`|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
