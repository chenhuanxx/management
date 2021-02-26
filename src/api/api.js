import {instance} from './'

const useApi = (url, args) => {
  let method = 'get'
  if (args.length > 0 && typeof args[0] === 'string') {
    if (args[0] === 'url') {
      return process.env.PREFIX_API + url
    }
    if (['get', 'post', 'put', 'delete'].indexOf(args[0]) > -1) {
      method = args[0]
      args.splice(0, 1)
    }
  }
  let options = {
    headers: {},
    method,
    baseURL: process.env.PREFIX_API,
    url,
    params: {}
  }
  if (args.length === 1 && args[0].useOption) {
    options = args[0]
    delete options.useOption
    if (url) {
      options.url = process.env.PREFIX_API + url
    }
    options.headers = options.headers || {}
    options.params = options.params || {}
  } else {
    let path = ''
    switch (args.length) {
      case 1:
        if (typeof args[0] === 'string' || typeof args[0] === 'number') {
          path = args[0]
        } else {
          options.params = args[0]
        }
        break
      case 2:
        if (typeof args[0] === 'string' || typeof args[0] === 'number') {
          path = args[0]
          options.params = args[1]
        } else {
          options.params = args[0]
          options.data = args[1]
        }
        break
      case 3:
        path = args[0]
        options.params = args[1]
        options.data = args[2]
        break
      default:
        break
    }
    if (path) {
      options.url = `${url}/${path}`
    }
  }
  if (options.params && options.params.hideError) {
    options.hideError = options.params.hideError
    delete options.params.hideError
  }
  return new Promise((resolve, reject) => {
    instance.request(options).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  axios (...args) {
    return useApi('', args)
  },
  getUserList (...args) {
    return useApi('use', args)
  },
  getRoleList (...args) {
    return useApi('role', args)
  },
  getNewsList (...args) {
    return useApi('news', args)
  }
}
