import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: '563492ad6f917000010000014251ab0018364c0eb106f0df240718b0'
  }
})

class ApiService {
  getPhotos(params = {}) {
    return instance.get('search', {
      params: params
    })
  }

  getPhotoById(id) {
    return instance.get('photos/' + id)
  }
}

export default new ApiService()
