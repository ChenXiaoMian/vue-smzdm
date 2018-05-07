<template>
  <div class="wrap-multi">
    <ul class="card-group-ul">
        <li class="card-group-list" @click="selectCard(item)" v-for="(item, index) in cardList" :key="index" :timesort="item.last_item" :channelId="item.article_channel_id">
          <div class="zm-card">
            <div class="zm-card-media">
              <img :src="replacePic(item.article_pic)" alt="">
              <div class="card-time">{{item.article_format_date}}</div>
              <div :class="cardLabel(item.article_channel_class)" v-show="item.article_channel_class">{{item.article_channel}}</div>
            </div>
            <div class="zm-card-content">
              <div class="zm-card-title">{{item.article_title}}</div>
              <div class="zm-card-price">{{item.article_price}}</div>
              <div class="zm-card-info">
                <span class="info-mall">{{item.article_mall}}</span>
                <span class="info-comments">
                  <i class="iconfont icon-comment"></i>{{item.article_comment}}
                </span>
              </div>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    cardList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    
  },
  methods: {
    replacePic (pic) {
      if(pic.indexOf('https:')>-1) pic = pic.replace('https:','http:')
      if(pic.indexOf('tp-qna.smzdm.com')>-1) pic = pic.replace('tp-qna.smzdm.com','localhost:8080/tpQna')
      if(pic.indexOf('tp-y.zdmimg.com')>-1) pic = pic.replace('tp-y.zdmimg.com','localhost:8080/tpY')
      if(pic.indexOf('tp-qny.smzdm.com')>-1) pic = pic.replace('tp-qny.smzdm.com','localhost:8080/tpQny')
      if(pic.indexOf('qny.smzdm.com')>-1) pic = pic.replace('qny.smzdm.com','localhost:8080/qnY')
      if(pic.indexOf('y.zdmimg.com')>-1) pic = pic.replace('y.zdmimg.com','localhost:8080/y')
      if(pic.indexOf('tp-qnam.smzdm.com')>-1) pic = pic.replace('tp-qnam.smzdm.com','localhost:8080/tpQnam')
      return pic
    },
    selectCard (item) {
      if(item.gtm && item.gtm != 'undefined'){
        var channel = item.gtm.channel_dimension
        // console.log(channel)
        this.$router.push({
          path: `/${channel}/${item.article_id}`
        })
        // vuex
        this.setGoods(item)
      }else{
        console.log(item)
        console.log('数据不完整，无法显示！');
      }
    },
    cardLabel (label) {
      return (label!=null) ? `card-label ${label.replace('z-tag-','card-label-')}` : ''
    },
    ...mapMutations({
      setGoods: 'SET_GOODS'
    })
  },
  created () {
    
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  @import '~assets/css/iconfont'

  .wrap-multi
    overflow: hidden
  .card-group-ul
    background-color: $bg-common
    li.card-group-list
      width: 50%
      float: left
      padding: .4rem .4rem .53333rem
      box-sizing: border-box
      border-bottom: 1px solid #f8f8f8
      background-color: #fff
      &:nth-of-type(odd)
        border-right: 1px solid #f8f8f8
      .zm-card
        .zm-card-media
          width: 4.18667rem
          height: 4.18667rem
          position: relative
          border-radius: 2px
          overflow: hidden
          margin-bottom: 20px
          img
            width: 100%
          .card-time
            position: absolute
            bottom: 0
            right: 0
            height: 15px
            line-height: 16px
            padding: 0 5px
            background: #fff
            border-radius: 2px 0 0 0
            font-size: 12px
            color: #888
        .zm-card-title
          width: 100%
          height: 42px
          line-height: 21px
          font-size: 14px
          font-weight: 700
          color: #333
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        .zm-card-price
          width: 100%
          height: 21px
          line-height: 21px
          font-size: 14px
          color: #f04848
          margin-bottom: 10px
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .zm-card-info
          width: 100%
          font-size: 11px
          color: #888
          line-height: 12px
          height: 12px
          .info-mall
            display: block
            float: left
            max-width: 70%
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          .info-comments
            height: 12px
            display: block
            float: right
            max-width: 30%
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            i
              margin-right: 5px
</style>
