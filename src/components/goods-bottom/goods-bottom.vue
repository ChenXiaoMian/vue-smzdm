<template>
  <div class="footer-wrap fixed-bottom flex">
    <div class="btn-l">
      <div class="z-group-data"><i class="iconfont icon-chongzhijilu"></i><span>{{goods.article_worthy}}</span></div>
      <div class="z-group-data"><i class="iconfont icon-shoucang"></i><span>{{goods.article_collection}}</span></div>
      <div class="share"><i class="iconfont icon-fenxiang"></i>分享</div>
      <div class="comments"><i class="iconfont icon-comment"></i><span>{{goods.article_comment}}</span></div>
    </div>
    <div class="placeholder"></div>
    <div class="btn-r">
      <a :href="goods.article_link">直达链接</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/css/iconfont'
  @import '~assets/scss/variable'
  .footer-wrap
    width: 100%
    max-width: 750px
    height: 38px
    line-height: 38px
    border-top: 1px solid #f3f3f3
    position: fixed
    bottom: 0
    background: #fbfbfb
    .btn-l
      flex: 1
      display: flex
      justify-content: space-around
      font-size: 10px
      color: #888
      line-height: 42px
      i
        color: $color-highlight
        font-size: 16px
        margin-right: 3px
      .icon-chongzhijilu~span
        color: #f04848
    .placeholder
      float: right
      width: 38px
      height: 38px
      position: relative
      z-index: 1
      border-radius: 50%
      background: #fbfbfb
      margin-right: -8px
    .btn-r
      padding: 0 15px 0 25px
      background: #f04848
      color: #fff
      font-size: 16px
      float: right
      height: 40px
      margin-top: -1px
      a
        color: #fff
</style>