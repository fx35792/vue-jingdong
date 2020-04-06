<template>
  <div id="home">
    <!-- 轮播图滚动 -->
    <cube-slide ref="slide" :data="items" @change="changePage" v-if="items.length">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.imageUrl" class="bannerImg" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 分类滚动 -->
    <cube-slide ref="slide" :data="lists" :auto-play="false" :showDots="false" class="cube-slide-two">
      <cube-slide-item
        v-for="(item, index) in lists"
        :key="index"
      >
       <ul class="list-ul">
         <li v-for="(item1,index1) in item" :key="index1" class="list-li">
           <a :href="item1.url">
             <img :src="item1.imageUrl" alt="">
             <p>{{item1.label}}</p>
           </a>
         </li>
       </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [],
      lists: []
    }
  },
  mounted () {
    // 获取轮播图数据
    this.getBannerInfo()
    // 获取分类数据
    this.getClassInfo()
  },
  methods: {
    async getBannerInfo () {
      try {
        const result = await this.$http('/api/banner')
        console.log(result)
        this.items = result.data
      } catch (e) {}
    },
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      // console.log(item, index)
    },
    async getClassInfo () {
      try {
        const result = await this.$http('/api/rollingList')
        this.lists = result.data
      } catch (e) {}
    }
  }
}
</script>
<style lang="stylus" scoped>
  #home
    .bannerImg
     width 100%
    .cube-slide-two
      margin-top 10px
      text-align center
      .list-ul
        display flex
        flex-wrap wrap
        .list-li
          width 25%
          justify-content center
          img
            width 35px
            height 35px
            border 50%
            padding 5 0
          p
            font-size 14px
            padding-bottom 10px

</style>
