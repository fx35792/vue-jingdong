import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let commonToken = ''
try {
  commonToken = localStorage.getItem('token') || ''
} catch (e) {

}
const store = new Vuex.Store({
  state: {
    token: commonToken,
    cartArray: JSON.parse(localStorage.getItem('cartArray')) || [] // 存储购物车商品的数据
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    // 添加商品到购物车
    addGoodToCart (state, tag) {
      const goods = state.cartArray.find(v => v.label === tag.label)
      if (goods) {
        // state.cartArray
        goods.count += 1
      } else {
        state.cartArray.push({ label: tag.label, count: 1 })
      }
    },
    // 购物车数量加一
    addCard (state, index) {
      state.cartArray[index].count++
    },
    // 购物车数量减一
    subtractionCard (state, index) {
      if (state.cartArray[index].count > 1) {
        state.cartArray[index].count--
      } else {
        if (window.confirm('确定从购物车移除商品吗')) {
          state.cartArray.splice(index, 1)
        }
      }
    },
    // 去除购物车里面的商品
    clearCart (state) {
      if (window.confirm('确定要清除购物车吗')) {
        state.cartArray = []
      }
    }
  },
  actions: {
  },
  getters: {
    conutSum: state => {
      let num = 0
      state.cartArray.forEach(v => {
        num += v.count
      })
      return num
    }
  },
  modules: {
  }
})
store.subscribe((mutations, state) => {
  localStorage.setItem('cartArray', JSON.stringify(state.cartArray))
})
export default store
