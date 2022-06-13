import { createStore } from 'vuex';
import { gameStore } from './modules/game.store';

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
  gameStore
  },
});

export default store;
