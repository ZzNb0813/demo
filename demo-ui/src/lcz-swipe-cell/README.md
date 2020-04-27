# lczPullRefresh 下拉刷新

### 介绍

lczPullRefresh  下拉刷新

### 引入

```js
import Vue from 'vue';
import { LczPullRefresh } from 'createrUI';

Vue.use(LczPullRefresh);
```

## 代码演示

### 基础用法

```html
  <lcz-swipe-cell>
         <template #right>
              <lcz-button   square  type="info">修改</lcz-button>
              <lcz-button   square  type="danger">删除</lcz-button>
         </template>
   </lcz-swipe-cell>
```



## API

### Props


| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|


###  Events

| 事件名 | 说明 | 回调参数 
|------|------|------|

