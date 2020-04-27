<template>
    <div>

<lcz-picker
        v-model="value"
        :columns="list"
        label="label"
        placeholder="ele.placeholder"
      />

              <lcz-radio-group  layoutDirection='column'  :data-options="data"   v-model="radio"/>

    </div>
     
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
   data() {
    return {
      list: [1,2,3,4],
      value:'你真帅',
      loading: false,
      finished: false,
      radio: 'a',
      required:true,
      activeIcon: require('./checkbox_ck.png'),
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
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
   goAbout(){
        this.$router.push({name:'About'})
   }
  },
  mounted(){
     console.log(this.activeIcon)
  },
  watch:{
  $route(to,from){
     if(to.path == '/'){
      this.value = '草泥马'
      this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
     }
  }
},
}
</script>
