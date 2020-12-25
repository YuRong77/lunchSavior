import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lunchList: [
      { text: "測試1", qty: 3 },
      { text: "測試2", qty: 3 },
      { text: "測試3", qty: 3 },
      { text: "測試4", qty: 3 },
      { text: "測試5", qty: 3 },
      { text: "測試6", qty: 3 },
    ],
    editIsShow: false,
    winningIsShow: false,
    winningItem: "",
  },
  mutations: {
    toggleEdit(state) {
      state.editIsShow = !state.editIsShow;
    },
    toggleShowWinning(state) {
        state.winningIsShow = !state.winningIsShow;
      },
    addList(state, payload) {
      state.lunchList.push(payload);
    },
    delItem(state, payload) {
      state.lunchList.splice(payload, 1);
    },
    sendWinningItem(state, payload) {
      state.winningItem = payload;
    },
  },
  actions: {},
  getters: {},
});

export default store;
