<template>
  <div>
    <ul class="card-group-ul">
        <li class="card-group-list" v-for="(item, index) in cardList" :key="index" timesort="152377170175">
          <div class="zm-card">
            <div class="zm-card-media">
              <img :src="item.article_pic.replace('https://tp-qny.smzdm.com/','http://localhost:8080/getTp/')" alt="">
              <div class="card-label card-label-guonei">{{item.article_channel}}</div>
            </div>
            <div class="zm-card-content">
              <div class="zm-card-title">{{item.article_title}}</div>
              <div class="card-price">{{item.article_price}}</div>
              <div class="zm-card-actions">
                <div class="zm-card-actions-left">
                  <span>
                    <span class="card-mall">{{item.article_mall}}</span>
                    <span>{{item.article_format_date}}</span>
                  </span>
                </div>
                <div class="zm-card-actions-right">
                  <span class="icon-group">
                    <i class="iconfont icon-comment"></i>{{item.article_comment}}
                  </span>
                  <span class="icon-group">
                    <i class="iconfont icon-chongzhijilu"></i>{{item.article_worthy}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    cardList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    
  },
  created () {
    
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/base'
  @import '~assets/scss/variable'
  @import '~assets/css/iconfont'

  .card-group-ul
    background-color: #f8f8f8
    li.card-group-list
      -webkit-tap-highlight-color: rgba(255,255,255,.35)
      -webkit-touch-callout: none
      color: #333
      .zm-card
        margin: 0 0 10px
        padding: 15px 10px
        background-color: #fff
        &,.zm-card-media
          display: -webkit-box
          display: -webkit-flex
          display: -ms-flexbox
          display: flex
        .zm-card-media
          position: relative
          min-width: 105px
          align-items: center
          justify-content: center
          width: 105px
          height: 105px
          border-radius: 2px
          overflow: hidden
          margin-right: 10px
          img
            max-height: 100%
            max-width: 100%
          .card-label
            position: absolute
            top: 0
            left: 0
            padding-left: 8px
            padding-right: 8px
            line-height: 15px
            border-radius: 2px
            height: 15px
            max-width: 84px
            font-size: 11px
            color: #fff
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            text-align: left
            &.card-label-guonei
              background-color: rgba(240,72,72,.8)
        .zm-card-content
          overflow: hidden
          display: flex
          flex: 1
          -webkit-box-orient: horizontal
          -webkit-box-direction: normal
          flex-flow: row wrap
          align-content: space-between
          min-height: 68px
          .zm-card-mintitle,.zm-card-title
            font-size: 15px
            line-height: 24px
            height: 48px
            overflow: hidden
            margin-bottom: 1px
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            font-weight: 700
          &>div
            width: 100%
          .card-price
            color: #f04848
            font-size: 15px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          .zm-card-actions
            color: #888
            font-size: 12px
            align-items: center
            display: flex
            width: 100%
            justify-content: space-between
            .zm-card-actions-left
              overflow: hidden
              &>span
                display: flex
                white-space: nowrap
                span
                  display: inline-block
                  height: 13px
                  line-height: 13px
                  vertical-align: middle
                  &:first-child
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                  &+span
                    padding-left: 6px
                    margin-left: 6px
                    border-left: 1px solid #888
            .zm-card-actions-right
              text-align: right
              white-space: nowrap
              margin-left: 20px
              .icon-group
                margin-left: 17px
                &:first-child
                  margin-left: 0
                i
                  margin-right: 4px
                  font-size: 12px
            span
              white-space: nowrap
</style>
