<template>
  <div class="home">

    123412432134
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getData());
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  mounted () {
  },
  watch: {
     
  },
  methods: {
    getData() {
      
    }
  },
  components: {
  }
};

</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
</style>
