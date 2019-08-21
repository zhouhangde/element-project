<template>
  <div id="app">
      <!-- keep-alive用于将全局的路由进行数据缓存 -->
      <keep-alive>
         <router-view/>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  },
  created(){
    
  },
  methods: {
  },
  methods: {
    
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
