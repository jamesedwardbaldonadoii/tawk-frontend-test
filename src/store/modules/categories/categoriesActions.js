import { CategoriesService } from '@/services/categories.service'

export default {
  getList ({ state, commit }) {
    commit('SET_LOADING', true)
    return CategoriesService.getCategories()
      .then(response => {
        commit('SET_ITEMS', response.data)
      })
      .catch(error => commit('SET_ERROR', error.message))
      .finally(() => commit('SET_LOADING', false))
  }
}
