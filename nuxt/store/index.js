import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    tab: 'home',
    subTab: 'user'
  },
  mutations: {
    changeTab (state, obj){
      Vue.set(state, "tab", obj.tab);
    },
    changeSubTab (state, obj){
      Vue.set(state, "subTab", obj.subTab);
    }
  },
  actions: {}
});

export default store