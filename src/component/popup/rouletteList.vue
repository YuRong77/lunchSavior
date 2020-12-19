<template>
  <div>
    <button @click="close">關閉</button>
    <button @click="saveList">儲存</button>
    <br />
    <input type="text" v-model="newItem" />
    <b-form-rating
      id="rating-inline"
      variant="warning"
      stars="3"
      inline
      v-model="listQty"
    ></b-form-rating>
    <button @click="addlist">新增</button>
    <div v-for="(item, index) in list" :key="item.text">
      <p>{{ item.text }}</p>
      <b-form-rating
        id="rating-inline"
        variant="warning"
        stars="3"
        inline
        v-model="item.qty"
      ></b-form-rating>
      <button @click="delItem(index)">刪除</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      newItem: "",
      listQty: "",
    };
  },
  methods: {
    close() {
      this.$emit("update:isShow", false);
    },
    addlist() {
      const item = {
        text: this.newItem,
        qty: this.listQty,
      };
      this.list.push(item);
      this.newItem = "";
      this.listQty = "";
    },
    delItem(idx) {
      this.list.splice(idx, 1);
    },
    saveList() {
      console.log(this.list, 888);
    },
  },
  created() {
    console.log(this.list, 777);
  },
};
</script>
<style lang="scss">
</style>