<template>
  <div class="classify">
    <cube-scroll class="left-scroll-list-wrap">
      <ul>
        <li v-for="(item,index) in tabsLabel" :class="item.active?'active':''" :key="index" @click="handleSelect(index)">{{ item.label }}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="right-scroll-list-wrap">
      <ul>
        <li v-for="(tag,index) in tagsList" :key="index">
          <img :src="tag.imageUrl" alt="">
          <p>
            {{tag.label}}
            <i class="cubeic-add" @click="addGood($event,tag)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @afterEnter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      ball: {
        show: false,
        el: ''
      },
      tabsLabel: [{
        label: '热门推荐',
        active: true
      }, {
        label: '手机数码',
        active: false
      }, {
        label: '家用电器',
        active: false
      }, {
        label: '电脑办公',
        active: false
      }, {
        label: '电脑办公',
        active: false
      }, {
        label: '美妆护肤',
        active: false
      }, {
        label: '个护清洁',
        active: false
      }, {
        label: '汽车生活',
        active: false
      }, {
        label: '京东超市',
        active: false
      }, {
        label: '男装',
        active: false
      }, {
        label: '女装',
        active: false
      }, {
        label: '女鞋',
        active: false
      }, {
        label: '男鞋',
        active: false
      }],
      tagsList: []
    }
  },
  methods: {
    handleSelect (index) {
      // console.log(index)
      this.tabsLabel.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          // console.log(itemIndex)
          item.active = true
        } else {
          item.active = false
        }
      })
      this.getTagsList(index)
    },
    // 获取分类的方法
    async getTagsList (index) {
      const result = await this.$http('/api/classify', { params: { type: index } })
      // console.log(result)
      this.tagsList = result.data
    },
    // 添加商品到购物车
    addGood (e, tag) {
      this.$store.commit('addGoodToCart', tag)
      // 让小球显示出来
      this.ball.show = true
      // 获取小球的dom节点
      this.ball.el = e.target
    },
    beforeEnter (el) {
      // 让小球移动到点击的位置
      // 获取点击位置
      const dom = this.ball.el
      // 获取点击Dom的位置
      const rect = dom.getBoundingClientRect()
      const x = rect.left - window.innerWidth * 0.69
      const y = -(window.innerHeight - rect.top)
      el.style.display = 'block'
      el.style.transform = `translate3d(0,${y}px,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter (el, done) {
      // 触发重绘
      const a = document.body.offsetHeight
      console.log(a)
      // 小球移动到原点，也就是购物车的位置
      el.style.transform = 'translate3d(0,0,0)'
      const inner = el.querySelector('.inner')
      inner.style.transform = 'translate3d(0,0,0)'
      // 过渡完成后，要执行的事件
      el.addEventListener('transitionend', done)
    },
    afterEnter (el) {
      // 结束之后隐藏小球
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  created () {
    // 获取默认的分类数据
    this.getTagsList(0)
  },
  mounted () {
    const leftDiv = document.querySelector('.left-scroll-list-wrap')
    const rightDiv = document.querySelector('.right-scroll-list-wrap')
    const windowHeight = document.documentElement.clientHeight
    leftDiv.style.height = windowHeight - 57 + 'px'
    rightDiv.style.height = windowHeight - 57 + 'px'
  }
}
</script>
<style lang="stylus" scoped>
.classify
  display flex
  .left-scroll-list-wrap
    width 30%
    li
      height 50px
      line-height 50px
      border-bottom 1px solid #ffffff
      color #333
      background-color #f8f8f8
      font-size 14px
      text-align center
    .active
      background-color #ffffff
      color #e93b3d
  .right-scroll-list-wrap
    width 70%
    ul
      display flex
      flex-wrap wrap
      li
        width 50%
        justify-content center
        align-items center
        text-align center
        img
          width 80px
          height 80px
        p
          font-size 14px
          .cubeic-add
            font-size 18px
  .ball-wrap
    .ball
      position fixed
      left 70%
      bottom 10px
      z-index 1003
      color red
      transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
      .inner
        width 16px
        height 16px
        transition all 1s linear

</style>
