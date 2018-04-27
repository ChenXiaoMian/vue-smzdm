import * as types from './mutations-types'
import state from './state'

const mutations = {
  [types.SET_GOODS] (state, goods){
    state.goods = goods
  }
}

export default mutations