<template>
  <div class="bg-white z-clearfix">
    <goods-detail :goods="goods" :goodsPic="articlePic"></goods-detail>
    <!-- 热门推荐 -->
    <div class="module-title">
        <i class="iconfont icon-remen"></i>
        <span>热门推荐</span>
    </div>
    <card-group :cardList="recommend" v-show="recommend.length"></card-group>
    <goods-bottom :goods="goods"></goods-bottom>
  </div>
</template>

<script>
import GoodsDetail from 'components/goods-detail/goods-detail'
import GoodsBottom from 'components/goods-bottom/goods-bottom'
import CardGroup from 'components/card-group/card-group'
import { mapGetters } from 'vuex'
import { getRecommend } from '@/api/index'

export default {
  data () {
    return {
      recommend: []
    }
  },
  created () {
    if(Object.keys(this.goods).length === 0){
        this.$router.push('/')
        return
    }
    this._getRecommend();
  },
  methods: {
    _getRecommend () {
      let goods = this.goods
      getRecommend(0, goods.article_channel_id, goods.article_id).then((res) => {
          if(res.message == 1) this.recommend = res.data
          // 获取最后一个timeout
          // console.log(this.recommend)
          // this.lastTimeout = this.cardList[this.cardList.length-1].timesort
      }).catch((err) => {
          console.log(err);
      });
    }
  },
  computed: {
    articlePic () {
      let pic = this.goods.article_pic
      if(pic.indexOf('https:')>-1) pic = pic.replace('https:','http:')
      if(pic.indexOf('tp-qna.smzdm.com')>-1) pic = pic.replace('tp-qna.smzdm.com','localhost:8080/tpQna')
      if(pic.indexOf('tp-y.zdmimg.com')>-1) pic = pic.replace('tp-y.zdmimg.com','localhost:8080/tpY')
      if(pic.indexOf('tp-qny.smzdm.com')>-1) pic = pic.replace('tp-qny.smzdm.com','localhost:8080/tpQny')
      if(pic.indexOf('qny.smzdm.com')>-1) pic = pic.replace('qny.smzdm.com','localhost:8080/qnY')
      if(pic.indexOf('y.zdmimg.com')>-1) pic = pic.replace('y.zdmimg.com','localhost:8080/y')
      if(pic.indexOf('tp-qnam.smzdm.com')>-1) pic = pic.replace('tp-qnam.smzdm.com','localhost:8080/tpQnam')
      return pic
    },
    ...mapGetters([
      'goods'
    ])
  },
  components: {
    GoodsDetail,
    GoodsBottom,
    CardGroup
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/css/iconfont'
  @import '~assets/scss/variable'
  .bg-white
    background-color: #fff
    overflow: hidden
  .module-title
    padding: 15px 15px 0
    background-color: #f8f8f8
    line-height: 28px
    font-size: 14px
    font-weight: 700
    i
      display: inline-block
      vertical-align: middle
      color: #f04848
      margin-right: 5px
    span
      display: inline-block
      vertical-align: middle
</style>
