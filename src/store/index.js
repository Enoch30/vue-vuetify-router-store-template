import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		test: 'test state',
	},
	getters: {
		test(state) {
			return state.test
		},
	},
	mutations: {
		setTest(state, data) {
			state.test = data
		},
	},
	actions: {},
	modules: {},
	subscribe: {}, //TODO: Store user token in state. On mount if exist, login directly. If expire, try using username and password to login. Else ask to login with usernmae set
})
