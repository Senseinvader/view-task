/* eslint-disable no-shadow */
import router from '@/router';

const state = {
  loggedIn: false,
  error: '',
};

const mutations = {
  setIsLoggedIn(state, payload) {
    state.loggedIn = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
};

const getters = {
  isAuthenticated(state) {
    return state.loggedIn;
  },
};

const actions = {
  userSignIn({ commit }, payload) {
    if (payload.login === 'Admin' && payload.password === '12345') {
      commit('setIsLoggedIn', true);
      commit('setError', '');
      router.push({ name: 'Profile' });
      window.localStorage.setItem('loggedIn', 'true');
    } else {
      commit('setError', 'user name or password are incorrect');
    }
  },
  userSignOut({ commit }) {
    commit('setUserLoggedIn', false);
    commit('setError', '');
    router.push({ name: 'HelloWorld' });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

