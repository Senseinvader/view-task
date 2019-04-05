import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  modules: {
    auth,
  },
});
