export default {
  SET_ITEMS (state, data) {
    state.items = data
  },

  SET_ERROR (state, data) {
    state.error = data
  },

  SET_LOADING (state, data) {
    state.loading = data
  }
}
