<template>
  <div class="mine">
     <img src="http://source.qunarzz.com/site/images/wns/20200323_qunar_dujia_banner750x192_5.jpg" class="banner" alt="">
     <ul class="list">
       <li v-for="item in list" class="" :key="item.label" @click="handleItemClick(item)">
         <span>{{item.label}}</span>
         <i class="cubeic-arrow"></i>
       </li>
     </ul>
  </div>
</template>
<script>
// const _this = this
export default {
  name: 'Mine',
  data () {
    return {
      list: [
        { label: '商品收藏' },
        { label: '我的足迹' },
        { label: '店铺收藏' },
        { label: '我的订单' },
        { label: '退出', type: 'exit' }
      ]
    }
  },
  methods: {
    handleItemClick (item) {
      if (item.type === 'exit') {
        this.$store.commit('setToken', '')
        localStorage.removeItem('token')
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.mine
  .banner
    width 100%
    display block
  .list
    li
      height 40px
      line-height 40px
      border-bottom 1px solid #efefef
      display flex
      justify-content space-between
      padding 0 10px
      span
        font-size 14px
      i
        font-size 16px
</style>
