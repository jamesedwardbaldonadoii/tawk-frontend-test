import { BaseService } from './base.service'

export class CategoriesService extends BaseService {
  static get entity () {
    return 'categories'
  }

  static getCategories () {
    return new Promise((resolve, reject) => {
      return this.request().get('/api/categories')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error, 'Response')
        })
    })
  }
}
