<template>
  <div class="roulette bg-rouletteBg py-4 py-md-5">
    <div class="container px-0">
      <!-- <b-form-rating id="rating-inline" variant="warning" stars="3" inline v-model="stars"></b-form-rating> -->
      <div class="circle">
        <div
          class="hand"
          ref="hand"
          :style="{ transform: `rotate(${pointerRotate}deg)` }"
        >
          <div class="pointer"></div>
        </div>
        <div class="startBtn">
          <button class="btn btn-danger" @click="gameStart">開始</button>
        </div>
        <div
          class="fan"
          v-for="(item, index) in lunchList"
          :key="item.text"
          :style="{
            transform: `rotate(${(360 / lunchList.length) * index}deg)`,
          }"
        >
          <div
            class="inner"
            :style="{
              transform: `rotate(${360 / lunchList.length}deg)`,
              background: `linear-gradient(to top, ${getHSL[0][index]}, ${getHSL[1][index]})`,
            }"
          >
            <div class="flash" ref="flash"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <div
          class="text"
          v-for="(item, index) in lunchList"
          :key="item.text"
          :style="{
            transform: `rotate(${
              (360 / lunchList.length) * index + 180 / lunchList.length
            }deg)`,
          }"
        >
          <h3>{{ item.text }}</h3>
          <div class="qtyLight bg-light">
            <div
              class="light w-100 h-100"
              :style="{ opacity: `${item.qty * 0.2}` }"
            ></div>
            <h5 class="m-0">{{ item.qty }}</h5>
          </div>
        </div>
      </div>
    </div>

    <rouletteList v-show="editIsShow" />
    <winning v-show="winningIsShow" />
  </div>
</template>

<script>
import rouletteList from "@/component/popup/rouletteList";
import winning from "@/component/popup/winning";
import { mapState } from "vuex";
export default {
  components: {
    rouletteList,
    winning,
  },
  computed: {
    ...mapState(["lunchList", "editIsShow", "winningIsShow"]),
    prizePool() {
      const allList = [];
      this.lunchList.forEach((item) => {
        for (let i = 0; i < item.qty; i++) {
          allList.push(item);
        }
      });
      return allList;
    },
    getHSL() {
      const lightList = [];
      const darkList = [];
      this.lunchList.forEach((item) => {
        const radom = Math.random();
        const radom2 = Math.random();
        const radom3 = Math.random();
        lightList.push(
          `hsl(${360 * radom},${20 + 70 * radom2}%,${85 + 10 * radom3}%)`
        );
        darkList.push(
          `hsl(${360 * radom},${20 + 60 * radom2}%,${55 + 10 * radom3}%)`
        );
      });
      return [lightList, darkList]; // 直接 return 隨機色有問題 改成用陣列
    },
  },
  data() {
    return {
      pointerRotate: "0",
      winningNum: "",
    };
  },
  methods: {
    gameStart() {
      const prizePoolIdx = ~~(Math.random() * this.prizePool.length); // 隨機選出 index
      // console.log("獎池陣列", this.prizePool);
      // console.log("prizePoolIdx", prizePoolIdx);
      // console.log("獎池選中物件", this.prizePool[prizePoolIdx]);
      this.$store.commit("sendWinningItem", this.prizePool[prizePoolIdx]);

      const resultIdx = this.lunchList.findIndex(
        (item) => item == this.prizePool[prizePoolIdx]
      );
      this.winningNum = resultIdx;

      this.$refs.hand.style.transition = `transform ${
        Math.floor(Math.random() * (12 - 8)) + 8
        // Math.floor(Math.random() * (3 - 1)) + 1
      }s`;
      this.pointerRotate =
        (360 / this.lunchList.length) * resultIdx +
        180 / this.lunchList.length +
        5400; // 指針需要轉的角度
    },
    spinning() {
      if (!this.pointerRotate) return;
      this.$refs.hand.style.transition = "none";

      this.$refs.flash[this.getWinningNum()].classList.add("start");

      setTimeout(() => {
        this.$refs.flash[this.getWinningNum()].classList.remove("start");
        this.$store.commit("toggleShowWinning");
        this.pointerRotate = "0";
      }, 1600);
    },
    getWinningNum() {
      return this.winningNum;
    },
  },
  mounted() {
    this.$refs.hand.addEventListener("transitionend", this.spinning);
  },
  beforeDestroy() {
    this.$refs.hand.removeEventListener("transitionend", this.spinning);
  },
};
</script>

<style lang="scss" scoped>
.roulette {
  border-radius: 50px;
}
.container {
  position: relative;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  border: 10px solid rgb(255, 200, 20);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 290px;
    height: 290px;
  }
  @media (max-width: 370px) {
    width: 250px;
    height: 250px;
  }
  & .circle {
    & .hand {
      position: absolute;
      width: 100%;
      height: 100%;
      // border: 4px solid rgb(218, 27, 27);
      border-radius: 50%;
      // transition: transform 3s;
      transition-timing-function: cubic-bezier(10, 6, 3, 10);
      box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
      z-index: 10;
      & .pointer {
        position: absolute;
        top: 95px;
        left: 50%;
        transform: translateX(-50%);
        width: 55px;
        height: 90px;
        clip-path: polygon(50% 0, 95% 55%, 70% 100%, 30% 100%, 5% 55%);
        background-image: linear-gradient(to right, #ffac31, #fce40e);
        z-index: 10;
        @media (max-width: 600px) {
          top: 55px;
          width: 30px;
          height: 55px;
        }
        @media (max-width: 370px) {
          top: 50px;
          width: 30px;
          height: 55px;
        }
      }
    }
    & .startBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      padding: 10px;
      background-image: linear-gradient(to right, #ffac31, #fce40e);
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
      z-index: 15;
      @media (max-width: 600px) {
        width: 90px;
        height: 90px;
      }
      @media (max-width: 370px) {
        width: 85px;
        height: 85px;
      }
      & button {
        background-image: linear-gradient(to bottom, #ffffff, #ff3434, #df0000);
        box-shadow: inset 0px 0px 6px 1px #9c0000;
        text-shadow: #ff7a7a 1px 1px 0px;
        color: #8f0000;
        font-size: 20px;
        // font-family: "微軟正黑體";
        font-weight: bold;
        // cursor: pointer;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: none;
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
      & .inner {
        position: absolute;
        // top: 0;
        // left: 0;
        width: 50%;
        height: 100%;
        // background: #5858B9;
        // transform: rotate(60deg);
        transform-origin: right center;
        & .flash.start {
          width: 100%;
          height: 100%;
          animation-name: Flash;
          animation-duration: 0.8s;
          animation-iteration-count: 3;
        }
        @keyframes Flash {
          0% {
            background: rgba(255, 255, 255, 0);
          }
          50% {
            background: rgba(255, 255, 255, 0.3);
          }
          100% {
            background: rgba(255, 255, 255, 0);
          }
        }
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
      & .qtyLight {
        position: absolute;
        top: 18%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        & .light {
          border-radius: 50%;
          // box-shadow: 0 0 5px 5px rgb(255, 255, 255);
          animation-name: light;
          animation-duration: 4s;
          animation-iteration-count: infinite;
        }
        @keyframes light {
          0% {
            box-shadow: 0 0 5px 0px rgb(255, 255, 255),
              0 0 5px 0px rgb(255, 230, 0);
          }
          50% {
            box-shadow: 0 0 5px 5px rgb(255, 255, 255),
              0 0 10px 10px rgb(255, 230, 0);
          }
          100% {
            box-shadow: 0 0 5px 0px rgb(255, 255, 255),
              0 0 5px 0px rgb(255, 230, 0);
          }
        }
        & h5 {
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
      }
    }
  }
}
</style>