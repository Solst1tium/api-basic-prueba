import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suscriptores: [],
    suscriptor: undefined
  },
  mutations: {
    SET_SUSCRIPTOR(state, suscriptor){
      state.suscriptor =  suscriptor
    },
    SET_SUSCRIPTORES(state, suscriptores){
      state.suscriptores = suscriptores
    },
    ADD_SUSCRIPTOR(state, suscriptor){
      state.suscriptores.push(suscriptor)
    }
  },
  actions: {    
    saveSubscription({commit, dispatch}, suscriptor){
      commit('SET_SUSCRIPTOR', suscriptor),     
      dispatch('addSuscriptor')
    },
    addSuscriptor({commit, state}){
      commit('ADD_SUSCRIPTOR', state.suscriptor)
      
    }
  },
  modules: {
  }
})
