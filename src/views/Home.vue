<template>
  <div class="home">
    <h1>午餐吃甚麼</h1>
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
  max-width: 1200px;
  margin: 0 auto;
  & h1 {
    padding: 50px 0;
  }
}

</style>
