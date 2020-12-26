<template>
  <div class="home container text-center">
    <h1 class="display-3 font-weight-bold text-title">午餐吃甚麼</h1>
    <div class="roulette">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: linear-gradient(to bottom, #ffb663, #fd9c1e, #ff8928);
  & h1 {
    padding: 80px 0;
    text-shadow: 2px 2px 5px rgb(204, 126, 36);
  }
}
</style>
