<template>
  <div>
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="bottomNav"
    ></cube-tab-bar>
    <span class="countNumber">{{conutSum}}</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BottomNav',
  data () {
    return {
      selectedLabelDefault: '',
      tabs: [
        {
          label: '首页',
          icon: 'cubeic-home'
        },
        {
          label: '分类',
          icon: 'cubeic-tag'
        },
        {
          label: '搜索',
          icon: 'cubeic-search'
        },
        {
          label: '购物车',
          icon: 'cubeic-mall'
        },
        {
          label: '我的',
          icon: 'cubeic-person'
        }
      ],
      transitionName: 'slide-right'
    }
  },
  created () {
    const path = this.$router.path
    switch (path) {
      case '/bottomNav/list':
        this.selectedLabelDefault = '分类'
        break
      case '/bottomNav/search':
        this.selectedLabelDefault = '搜索'
        break
      case '/bottomNav/cart':
        this.selectedLabelDefault = '购物车'
        break
      case '/bottomNav/mine':
        this.selectedLabelDefault = '我的'
        break
      case '/bottomNav/home':
        this.selectedLabelDefault = '首页'
        break
      default:
        this.selectedLabelDefault = '首页'
    }
  },
  mounted () {

  },
  computed: {
    ...mapGetters({
      conutSum: 'conutSum'
    })
  },
  methods: {
    clickHandler (label) {
      // console.log('label1', label)
    },
    changeHandler (label) {
      // console.log('label2', label)
      switch (label) {
        case '首页':
          this.$router.push({ path: '/bottomNav/home' })
          break
        case '分类':
          this.$router.push({ path: '/bottomNav/list' })
          break
        case '搜索':
          this.$router.push({ path: '/bottomNav/search' })
          break
        case '购物车':
          this.$router.push({ path: '/bottomNav/cart' })
          break
        case '我的':
          this.$router.push({ path: '/bottomNav/mine' })
          break
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.bottomNav >>> {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ddd;
  height 57px
  .cube-tab {
    i {
      font-size: 20px;
    }

    div {
      font-size: 14px;
    }
  }
}

.router {
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform translate(100%,0)
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform translate(-100%,0)
}
.countNumber
  position fixed
  bottom 33px
  right  23%
  z-index 1001
  width 18px
  height 18px
  line-height 18px
  border-radius 50%
  background-color red
  color #ffffff
  font-size 12px
  text-align center
</style>
