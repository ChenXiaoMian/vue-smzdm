<template>
  <div class="bg-white z-clearfix">
    <header-top>
      <header-tab slot="tab"></header-tab>
    </header-top>
    <div class="detail-banner">
      <img :src="articlePic" alt="">
    </div>
    <div class="details-title z-clearfix">
      <div class="grey ellipsis">
        <span class="mall">{{goods.article_mall}}</span>
        <span class="line"></span>
        <span class="time">{{goods.article_format_date}}</span>
        <span class="line"></span>
        <span class="author">爆料人：{{goods.article_referrals}}</span>
      </div>
      <h1>{{goods.article_title}}</h1>
      <p class="price">{{goods.article_price}}</p>
      <div class="go-link"><a :href="goods.article_link" target="_blank">直达链接</a></div>
    </div>
    <article class="article">
      <div v-html="goods.article_content"></div>
    </article>
    <ul class="tags-wrapper z-clearfix">
      <li class="tags" v-show="goods.article_category.title"><a :href="goods.article_category.category_url">分类：{{goods.article_category.title}}</a></li>
      <li class="tags" v-show="goods.article_tese_tags.length" v-for="(item, index) in goods.article_tese_tags" :key="index"><a :href="item.tag_url">标签：{{item.name}}</a></li>
      <li class="tags" v-show="goods.gtm.mall"><a href="#">商城：{{goods.gtm.mall}}</a></li>
      <li class="tags" v-show="goods.gtm.brand"><a href="#">品牌：{{goods.gtm.brand}}</a></li>
    </ul>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import HeaderTab from 'components/header-tab/header-tab'
import { mapGetters } from 'vuex'

export default {
  created () {
    if(Object.keys(this.goods).length === 0){
        this.$router.push('/')
        return
    }
  },
  computed: {
    articlePic () {
      let url = this.goods.article_pic
      url = url.indexOf('tp-qny') > -1 ?  url.replace('https://tp-qny.smzdm.com/','http://localhost:8080/tpQny') : url.replace('https://tp-y.zdmimg.com/','http://localhost:8080/tpy')
      return url
    },
    ...mapGetters([
      'goods'
    ])
  },
  components: {
    HeaderTop,
    HeaderTab
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .bg-white
    background-color: #fff
    overflow: hidden
  .detail-banner
    margin-top: 41px
    padding-bottom: 10px
    background: #fff
    width: 100%
    max-height: 180px
    overflow: hidden
    text-align: center
    img
      vertical-align: middle
      max-width: 100%
      max-height: 180px
  .details-title
    padding: 10px 4% 30px
    background: #fff
    .grey
      color: #888
      font-size: $font-size-small
      line-height: 14px
      margin-bottom: 5px
      span
        display: inline-block
        vertical-align: middle
      .line
        display: inline-block
        width: 1px
        height: 12px
        background: #bbb
        margin: 0 5px
    h1
      font-size: $font-size-large
      line-height: 30px
      font-weight: 700
      margin: 0
    .price
      font-size: $font-size-large
      line-height: 30px
      color: $color-highlight
      margin: 0
      margin-bottom: 5px
    .go-link
      padding: 0 10px
      line-height: 25px
      height: 25px
      font-size: 12px
      background: $color-highlight
      background: -webkit-linear-gradient(#f36e5d,$color-highlight)
      background: linear-gradient(#f36e5d,$color-highlight)
      border-radius: 2px
      float: left
      &>a
        display: block
        width: 100%
        height: 100%
        color: #fff
  article
    font-size: 14px
    line-height: 25px
    padding: 0 4%
    word-wrap: break-word
    overflow-x: hidden!important
  .article
    background: #fff
    padding-bottom: 20px
  .tags-wrapper
    margin-bottom: 20px
    padding: 0 4%
    .tags
      font-size: $font-size-medium
      line-height: 24px
      margin: 0 15px 15px 0
      float: left
      max-width: 100%
      border-radius: 2px
      border: 1px solid #f1f1f1
      a
        color: #666;
        margin-left: 10px
        margin-right: 10px
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
        display: block
</style>
