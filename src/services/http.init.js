import axios from 'axios'

export class Http {
  constructor () {
    this.instance = axios.create({
      baseURL: '/'
    })

    return this.init()
  }

  init () {
    return this.instance
  }
}
