import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		testname: "111",
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF']
	},
	mutations: {
		setColorIndex(state, index) {
			state.colorIndex = index
		},
		setTestName(state, name) {
			console.log(state, name);
			state.testname = name
		}
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		}
	},
})

export default store;
