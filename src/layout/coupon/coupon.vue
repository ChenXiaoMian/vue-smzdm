<template>
  <div class="wrap-content">
    <div class="top-banner">
      <slide :data="slider"  v-if="slider.length"></slide>
    </div>
    <hot-mall :data="mallList" @refreshMall="refreshMall"></hot-mall>
    <coupon-tab :data="couponTab"></coupon-tab>
  </div>
</template>

<script>
import Slide from 'components/slide/slide'
import HotMall from 'components/hot-mall/hot-mall'
import CouponTab from 'components/coupon-tab/coupon-tab'
import { getMoreMall } from '@/api/index'
import { couponSlide, couponTab } from 'static/data'

const mallTotal = 8   // 热门商城图标常量

export default {
  data () {
    return {
      slider: couponSlide,
      mallList: [],
      mallPage: 1,
      couponTab: couponTab
    }
  },
  created () {
    this._getMoreMall()
    
  },
  methods: {
    _getMoreMall () {
      getMoreMall(this.mallPage).then((res)=>{
        if(res.error_code === 0) this.mallList = res.data.rows
        this.mallPage = (res.data.total < mallTotal) ? 1 : this.mallPage + 1
      }).catch((e)=>{
        console.log(e)
      })
    },
    refreshMall () {
      this._getMoreMall()
    }
  },
  components: {
    Slide,
    HotMall,
    CouponTab
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .top-banner
    position: relative
    width: 100%
    overflow: hidden
    margin-bottom: 5px
</style>
