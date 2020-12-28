<template>
  <div>
    <div class="roulletteList">
      <!-- animate 跟有設 position 的 div 做在一起有問題 改到下層 -->
      <div
        class="bg-light animate__animated animate__fadeInDown animate__faster py-4"
      >
        <h2 class="text-center mb-3">我的清單</h2>
        <div class="input-group w-75 mx-auto mb-4">
          <input type="text" class="form-control" v-model="newItem" />
          <div class="input-group-append">
            <b-button variant="myorg text-light" @click="addlist"
              >新增</b-button
            >
          </div>
        </div>
        <table class="tableList table d-block overflow-auto mx-auto mb-4">
          <tr v-for="(item, index) in lunchList" :key="item.text">
            <td class="align-middle" width="120px">
              <h4 class="text-break my-2">{{ item.text }}</h4>
            </td>
            <td class="align-middle">
              <b-form-rating
                id="rating-inline"
                variant="star"
                stars="5"
                inline
                class="bg-light"
                v-model="item.qty"
              ></b-form-rating>
            </td>
            <td class="align-middle">
              <b-button
                variant="none"
                class="text-secondary d-flex"
                @click="delItem(index)"
                ><b-icon icon="x"></b-icon>
                <h5 class="d-none d-md-block m-0">刪除</h5></b-button
              >
            </td>
          </tr>
        </table>
        <div class="text-center">
          <b-button variant="myorg text-light" class="px-4" @click="close"
            >OK!</b-button
          >
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
    ...mapState(["lunchList"]),
  },
  data() {
    return {
      newItem: "",
      listQty: "3",
    };
  },
  methods: {
    close() {
      this.$store.commit("toggleEdit");
    },
    addlist() {
      const item = {
        text: this.newItem,
        qty: "3",
      };
      this.$store.commit("addList", item);
      this.newItem = "";
    },
    delItem(idx) {
      this.$store.commit("delItem", idx);
    },
  },
  created() {},
};
</script>
<style lang="scss">
.roulletteList {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 500px;
  height: 670px;
  z-index: 20;
  @media (max-width: 600px) {
    width: 340px;
    height: 500px;
  }
  & > div {
    border: 5px solid #ffb23e;
    border-radius: 30px;
  }
  & .tableList {
    width: 400px;
    height: 380px;
    @media (max-width: 600px) {
      width: 325px;
      height: 300px;
    }
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