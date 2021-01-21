// import Vue from 'vue'
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['token'] = token
    } else {
      location.href = location.origin + '/sign-in.html'
    }
    return config
  },
  error => {
    return error
  }
)
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          location.href = location.origin + '/sign-in.html'
          break
        default:
          return Promise.reject(error.response.data)
      }
    } else if (error.isCancel) {
      return error
    }
  })

export const instance = axios
