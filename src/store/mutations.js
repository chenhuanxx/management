import * as types from './mutation-type'

export const mutations = {
  [types.HANDLE_LEFTNAVWIDTH] (state, leftNavWidth) {
    state.leftNavWidth = leftNavWidth
  }
}
