<template>
  <div>
    <div class="circle">
      <div
        class="fan"
        v-for="(item, index) in list"
        :key="item.text"
        :style="{ transform: `rotate(${(360 / list.length) * index}deg)` }"
      >
        <div
          class="inner"
          :style="{ transform: `rotate(${360 / list.length}deg)`, background    : index%2 == 0 ? color1 : color2  }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { text: "測試1", num: 1 },
        { text: "測試2", num: 1 },
        { text: "測試3", num: 1 },
        { text: "測試4", num: 1 },
      ],
      color1: "pink",
      color2: "yellow",
      color3: "red"
    };
  },
};
</script>

<style lang="scss" scoped>
.circle {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
}
.fan {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  & .inner {
    width: 50%;
    height: 100%;
    background: #5858B9;
    // transform: rotate(60deg);
    transform-origin: right center;
  }
}
</style>