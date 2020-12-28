<template>
  <div class="home container d-flex flex-column justify-content-center py-3">
    <h1 class="font-weight-bold text-mybrown text-center">午餐吃甚麼</h1>

    <router-view></router-view>

    <div class="edit d-flex justify-content-center">
      <div class="controller d-flex justify-content-around p-3">
        <button
          type="button"
          class="btn btn-warning rounded-pill px-4"
          @click="editList"
        >
          編輯清單
        </button>
        <button
          type="button"
          class="btn btn-warning rounded-pill px-4"
          @click="editList"
        >
          切換遊戲
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    editList() {
      this.$store.commit("toggleEdit");
    },
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: linear-gradient(to bottom, #ffb663, #fd9c1e, #ff8928);
  & h1 {
    margin: 20px 0 60px 0;
    text-shadow: 2px 2px 5px rgb(204, 126, 36);
    @media (max-width: 600px) {
      margin: 20px 0 20px 0;
    }
  }
  & .edit {
    margin-top: 40px;
    & .controller {
      width: 400px;
      border-radius: 30px;
      background: linear-gradient(
        to right,
        rgba(252, 235, 222, 0.5),
        rgba(255, 191, 132, 0.5)
      );
    }
  }
}
</style>
