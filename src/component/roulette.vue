<template>
  <div>
    <div class="container">
      <div class="circle">
        <div
          class="fan"
          v-for="(item, index) in list"
          :key="item.text"
          :style="{
            transform: `rotate(${(360 / list.length) * index}deg)`,
          }"
        >
          <div
            class="inner"
            :style="{
              transform: `rotate(${360 / list.length}deg)`,
              background: list.length % 2 == 0 ? even(index) : odd(index),
            }"
          ></div>
        </div>
      </div>
      <div class="content">
        <div
          class="text"
          v-for="(item, index) in list"
          :key="item.text"
          :style="{
            transform: `rotate(${
              (360 / list.length) * index + 180 / list.length
            }deg)`,
          }"
        >
          <h3>{{ item.text }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      list: [
        { text: "測試1", num: 1 },
        { text: "測試2", num: 1 },
        { text: "測試3", num: 1 },
        { text: "測試4", num: 1 },
        { text: "測試5", num: 1 },
        // { text: "測試6", num: 1 },
        // { text: "測試7", num: 1 },
      ],
      color0: "pink",
      color1: "gray",
      color2: "red",
    };
  },
  methods: {
    even(index) {
      console.log(2);
      const val = index + 10;
      return val % 2 == 0 ? this.color0 : this.color1;
    },
    odd(index) {
      console.log(3);
      const val = index + 10;
      if (val % 3 == 0) {
        return this.color0;
      }
      if (val % 3 == 1) {
        return this.color1;
      }
      if (val % 3 == 2) {
        return this.color2;
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  & .circle {
    & .fan {
      position: absolute;
      // top: 0;
      // right: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
      & .inner {
        position: absolute;
        // top: 0;
        // left: 0;
        width: 50%;
        height: 100%;
        // background: #5858B9;
        // transform: rotate(60deg);
        transform-origin: right center;
      }
    }
  }
  & .content {
    // position: absolute;
    width: 100%;
    height: 100%;
    & .text {
      position: absolute;
      width: 100%;
      height: 100%;
      & h3 {
        position: absolute;
        top: 10%;
        right: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
}
</style>