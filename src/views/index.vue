<template>
  <div class="index">
    <!-- keep-alive用于将全局的路由进行数据缓存 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
    };
  },
  created(){
  },
  methods: {
  },
  components: {
     
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
