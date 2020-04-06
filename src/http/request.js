import axios from 'axios'
import store from '../store/'
import router from '../router/'

export default function setAxios () {
  // 请求拦截
  axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        config.headers.token = store.state.token
      }
      return config
    }
  )
  // 每次的请求返回，都是先经过这个拦截器的
  axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        const data = response.data
        if (data.code === -1) {
          // 登录过期 需要重新登录 清空vuex当中的token以及localStorage当中的token
          this.$store.commit('setToken', '')
          window.localStorage.removeItem('token')
          router.replace({ path: '/login' })
        }
        return data
      }
      return response
    }
  )
}
