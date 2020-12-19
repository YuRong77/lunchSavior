<template>
  <div>
    <div class="container px-0">
      <!-- <b-form-rating id="rating-inline" variant="warning" stars="3" inline v-model="stars"></b-form-rating> -->
      <div class="circle">
        <div class="hand" :style="{ transform: `rotate(${pointerRotate}deg)` }">
          <button @click="gameStart">開始</button>
          <div class="pointer"></div>
        </div>
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
              background: getHSL[index],
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
      <div class="add">
        <button @click="editList">編輯</button>
        
      </div>
    </div>

    <rouletteList
      :list="list"
      :changeList.sync="list"
      :isShow.sync="showEditList"
      v-show="showEditList"
    />
    
    
  </div>
</template>

<script>
import rouletteList from "@/component/popup/rouletteList";
export default {
  components: {
    rouletteList,
  },
  computed: {
    prizePool() {
      const allList = [];
      this.list.forEach((item) => {
        for (let i = 0; i < item.qty; i++) {
          allList.push(item);
        }
      });
      return allList;
    },
    getHSL() {
      const colorList = [];
      this.list.forEach((item) => {
        colorList.push(
          `hsl(${360 * Math.random()},${20 + 70 * Math.random()}%,${
            80 + 10 * Math.random()
          }%)`
        );
      });
      return colorList; // 直接 return 隨機色有問題 改成用陣列
    },
  },
  data() {
    return {
      showEditList: false,
      list: [
        { text: "測試1", qty: 2 },
        { text: "測試2", qty: 2 },
        { text: "測試3", qty: 1 },
        { text: "測試4", qty: 1 },
        { text: "測試5", qty: 1 },
        { text: "測試6", qty: 1 },
      ],
      pointerRotate: "",
      // stars: "1",
    };
  },
  methods: {
    gameStart() {
      const prizePoolIdx = ~~(Math.random() * this.prizePool.length); // 隨機選出 index
      console.log("獎池陣列", this.prizePool);
      console.log("prizePoolIdx", prizePoolIdx);
      console.log("獎池選中物件", this.prizePool[prizePoolIdx]);
      const resultIdx = this.list.findIndex(
        (item) => item == this.prizePool[prizePoolIdx]
      );
      console.log("resultIdx", resultIdx);
      console.log(
        (360 / this.list.length) * resultIdx + 180 / this.list.length
      ); // 指針需要轉的角度
      this.pointerRotate =
        (360 / this.list.length) * resultIdx + 180 / this.list.length + 720;
      // this.getRotate(rotate);
    },
    // getHSL() {
    //   return `hsl(${360 * Math.random()},${20 + 70 * Math.random()}%,${
    //     80 + 10 * Math.random()
    //   }%)`;
    // },
    // getRotate(rotate) {
    //   console.log(rotate)
    //   return `rotate(${rotate}deg)`
    // },
    editList() {
      this.showEditList = true;
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
    & .hand {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 3s;
      z-index: 10;
      & {
        .pointer {
          position: absolute;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 120px;
          background: black;
          z-index: 10;
        }
      }
    }
    & .fan {
      position: absolute;
      // top: 0;
      // right: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
      pointer-events: none; // 讓元素無法被點擊

      // border: 3px solid black;
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
    width: 100%;
    height: 100%;
    & .text {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none; // 讓元素無法被點擊
      & h3 {
        position: absolute;
        top: 10%;
        right: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
  & .add {
    margin: 80px 0;
  }
}
</style>