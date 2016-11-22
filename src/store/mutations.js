import {INCREMENT } from './mutationTypes.js'

const mutations = {
	[INCREMENT](state){
		state.count++
	}
}

export default mutations