import { BaseService } from './base.service'

export class ArticlesService extends BaseService {
  static getArticles () {
    return new Promise((resolve, reject) => {
      return this.request().get('/api/category/*')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error, 'Response')
        })
    })
  }
}
