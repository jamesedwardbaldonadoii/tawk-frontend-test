import { BaseService } from './base.service'

export class AuthorsService extends BaseService {
  static getAuthor (authorId) {
    return new Promise((resolve, reject) => {
      return this.request().get(`/api/author/${authorId}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error, 'Response')
        })
    })
  }
}
