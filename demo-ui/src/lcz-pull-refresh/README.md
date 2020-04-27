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
  <lcz-pull-refresh  v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
 </lcz-pull-refresh>
```
```js
    export default {
        data() {
          return {
               count: 0,
               isLoading: false,
          };
        },
        methods: {
          onRefresh() {
              setTimeout(() => {
                    this.isLoading = false;
                    this.count++;
              }, 1000);
            },
        }
    }
```


## API

### Props


| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model	 | 是否处于加载中状态	 | boolean  | `-` |


###  Events

| 事件名 | 说明 | 回调参数 
|------|------|------|
| refresh | 下拉刷新时触发 | `-`|

