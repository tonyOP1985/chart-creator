import Vue from 'vue';
import Vuex from 'vuex';
import leadSheet from '@/store/modules/leadSheet';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    leadSheet,
  },
});

export default store;
