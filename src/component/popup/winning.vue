<template>
  <div>
    <div class="winning">
      <div class="bg-light animate__animated animate__tada p-4">
        <h3>{{winningItem.text}}</h3>
        <button @click="close">確定</button>
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 200px;
  z-index: 20;
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