<template>
  <div>
    <div class="roulletteList">
      <!-- animate 跟有設 position 的 div 做在一起有問題 改到下層 -->
      <div
        class="bg-light animate__animated animate__fadeInDown animate__faster p-4"
      >
        <h2 class="text-center mb-3">我的清單</h2>
        <div class="input-group w-75 mx-auto mb-5">
          <input type="text" class="form-control" v-model="newItem" />
          <div class="input-group-append">
            <b-button variant="success" @click="addlist">新增</b-button>
          </div>
        </div>
        <table
          class="table d-block w-75 mx-auto mb-5"
          style="height: 380px; overflow-y: auto"
        >
          <tr v-for="(item, index) in lunchList" :key="item.text">
            <td width="120" class="h4">{{ item.text }}</td>
            <td>
              <b-form-rating
                id="rating-inline"
                variant="star"
                stars="5"
                inline
                class="bg-light"
                v-model="item.qty"
              ></b-form-rating>
            </td>
            <td>
              <b-button
                variant="none"
                class="text-secondary"
                @click="delItem(index)"
                ><b-icon icon="x" class="pt-1"></b-icon>刪除</b-button
              >
            </td>
          </tr>
        </table>
        <div class="text-center">
          <b-button variant="danger" @click="close">關閉</b-button>
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
      this.$store.commit("toggleEdit")
    },
    addlist() {
      const item = {
        text: this.newItem,
        qty: "3",
      };
      this.$store.commit("addList", item)
      this.newItem = "";
    },
    delItem(idx) {
      this.$store.commit("delItem", idx)
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
  width: 600px;
  height: 670px;
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