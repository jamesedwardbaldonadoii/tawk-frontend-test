export default {
  isEmpty: (state) => !state.items.length,
  categories: (state) => state.items,
  getCategoryById: (state) => (catId) => {
    return state.items.find(cat => cat.id === catId)
  }
}
