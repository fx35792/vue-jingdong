<template>
  <div class="goods">
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <span class="title">{{item.label}}</span>
        <div class="goods-right">
          <i class="cubeic-remove" @click="handleRemove($el,index)"></i>
          <font>{{item.count}}</font>
          <i class="cubeic-add" @click="handleAdd(index)"></i>
        </div>
      </li>
    </ul>
    <cube-button>去下单</cube-button>
    <cube-button @click="handleClear()">清除购物车</cube-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      goodsList: 'cartArray'
    })
  },
  methods: {
    handleRemove (el, index) {
      this.$store.commit('subtractionCard', index)
    },
    handleAdd (index) {
      this.$store.commit('addCard', index)
    },
    // 清除购物车
    handleClear () {
      this.$store.commit('clearCart')
    }
  }

}
</script>
<style lang="stylus" scoped>
.cube-btn
  margin-bottom 10px
.goods
  ul
    li
      display flex
      height 40px
      line-height 40px
      padding 0 5px
      justify-content space-between

      .title
        font-size 14px
      .goods-right
        font
          font-size 16px
        i
          font-size 20px
</style>
