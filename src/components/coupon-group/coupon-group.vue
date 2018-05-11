<template>
  <div class="feed-col-wrap">
    <ul class="feed-col-list z-clearfix">
      <li v-for="(item, index) in data" :key="index">
        <a href="https://h5.smzdm.com/user/coupon?coupon_id=66685">
          <div class="feed-col-r">
            <p class="feed-col-condition"><em>{{item.need_points}}</em></p>
            <div class="feed-col-btn">兑换</div>
          </div>
          <div class="feed-col-l">
            <span class="feed-col-pic z-img-center">
              <img :src="filterPic(item.logo_url)">
            </span>
            <span class="feed-col-title">{{item.fav_price}}</span>
            <p class="feed-col-info">{{item.coupon_title}}</p>
          </div>
        </a>
      </li>
    </ul>
    <loading v-show="loading"></loading>
    <div class="feed-no-data" v-show="!loading">没有了哦</div>
  </div>
</template>

<script>
import { filterMixin } from '@/api/mixins'
import Loading from 'base/loading/loading'

export default {
  mixins: [filterMixin],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean
    }
  },
  components: {
    Loading
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .feed-col-list
    li
      width: 100%
      box-sizing: border-box
      background-color: #fff
      height: 120px
      position: relative
      padding-left: 4%
      margin-bottom: 5px
      a
        display: block
      .feed-col-r
        width: 100px
        height: 120px
        background: url('./line.png') no-repeat
        background-size: 3px 120px
        float: right
        .feed-col-condition
          padding-top: 30px
          font-size: 15px
          color: #666
          text-align: center
          line-height: 15px
          margin-bottom: 20px
          em
            color: $color-highlight
            font-style: normal
        .feed-col-btn
          width: 75px
          height: 25px
          line-height: 25px
          color: #fff
          margin: 0 auto
          background-color: $color-highlight
          border-radius: 25px
          text-align: center
          font-size: 15px
      .feed-col-l
        padding-top: 15px
        .feed-col-pic
          width: 90px
          height: 45px
          float: left
          margin-right: 16px
          img
            width: 100%
        .feed-col-title
          height: 45px
          line-height: 45px
          font-size: 15px
          color: $color-highlight
          max-width: 152px
          display: block
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .feed-col-info
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          color: #666
          font-size: 12px
          line-height: 20px
          padding-top: 10px
          padding-right: 15px
          box-sizing: border-box
  .feed-no-data
    margin: 10px 0
    text-align: center
    font-size: 12px
    padding-bottom: 10px
</style>
