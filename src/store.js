import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// types，此用于在浏览器的vue中调试使用
const types = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN'
};

// state
const state = {
  location: {},
  access_token:''
};

// getters
const getters = {
  // 当前位置
  location: state => state.location,
  // 用户的token
  access_token: state => state.access_token

};

// mutations
const mutations = {
  // [types.SET_LOCATION]也为方法的一种调用方式
  [types.SET_LOCATION](state, location) {
    if (location) {
      state.location = location;
    } else {
      state.location = null;
    }
  },
  [types.SET_ACCESS_TOKEN](state, access_token) {
    if (access_token) {
      state.access_token = access_token;
    } else {
      state.access_token = '';
    }
  }
};

// actions
const actions = {
  setLocation: ({ commit }, location) => {
    commit(types.SET_LOCATION, location);
  },
  setAccessToken:({ commit }, access_token) => {
    commit(types.SET_ACCESS_TOKEN, access_token);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
