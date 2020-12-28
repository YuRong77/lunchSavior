<template>
  <div>
    <div class="winning">
      <div class="bg-light text-center animate__animated animate__tada p-4">
        <span class="text-mybrown h5">等等就吃</span>
        <h3 class="text-danger font-weight-bold d-inline-block mx-2">
          {{ winningItem.text }}!
        </h3>
        <div class="text-center mt-3">
          <button class="btn btn-myorg text-light" @click="close">吃了!</button>
        </div>
      </div>
    </div>
    <div class="bgDark"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["winningItem"]),
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$store.commit("toggleShowWinning");
    },
  },
};
</script>

<style lang="scss">
.winning {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 300px;
  z-index: 20;
  & > div {
    border: 5px solid #ffb23e;
    border-radius: 30px;
  }
}
.bgDark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
}
</style>