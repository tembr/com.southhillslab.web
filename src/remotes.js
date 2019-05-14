// import axios from 'axios'
// // eslint-disable-next-line no-undef
// const config = __APP_CONFIG__

export const withAuthorization = (authorization, config = {}) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${authorization}`
  }
})

// export const BACKEND = axios.create({
//   baseURL: config.api.url
// })
//
// export const PLASMA = axios.create({
//   baseURL: config.plasma.url
// })
//
// export const SSO = axios.create({
//   baseURL: config.sso.url
// })
