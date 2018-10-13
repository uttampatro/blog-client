import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

let initialValues = {
    isLoggedIn: false,
    showHeader: false,
    selectedMenuItem: 'SessionList'
};
Vue.use(Vuex);
export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: JSON.parse(JSON.stringify(initialValues)),
    getters: {
        // Compute derived state based on the current state. More like computed property.
    },
    mutations: {
        // Mutate the current state
        setHeaderVisiblity(state, payload) {
            state.showHeader = payload;
        },
        setLoginStatus(state, payload) {
            state.isLoggedIn = payload;
        },
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        clearLoginInfo(state, payload) {
            //Remove old values;
            Object.keys(state).forEach(key => {
                delete state[key];
            });
            //Set new values
            let originalValues = JSON.parse(JSON.stringify(initialValues));
            Object.keys(originalValues).forEach(key => {
                state[key] = originalValues[key];
            });
            console.log('cleared session data');
        },
        setSessionInfo(state, payload) {
            state.sessionInfo = payload;
        },
        clearSessionInfo(state, payload) {
            delete state.sessionInfo;
            state.isLoggedIn = false;
        },
    },
    actions: {
        // Get data from server and send that to mutations to mutate the current state
        setHeaderVisiblity(context, payload) {
            context.commit('setHeaderVisiblity', payload);
        },
        setLoginStatus(context, payload) {
            context.commit('setLoginStatus', payload);
        },
        setUserInfo(context, payload) {
            context.commit('setUserInfo', payload);
        },
        clearLoginInfo(context, payload) {
            context.commit('clearLoginInfo', payload);
        },
        setSessionInfo(context, payload) {
            context.commit('setSessionInfo', payload);
        },
        clearSessionInfo(context, payload) {
            context.commit('clearSessionInfo', payload);
        },
    }
})