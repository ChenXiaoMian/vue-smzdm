<template>
  <scroll ref="scroll" class="wrap-content" :data="couponList" :pullup="true" @scrollToEnd="getMore">
    <div>
      <div class="top-banner">
        <slide :data="slider" v-if="slider.length"></slide>
      </div>
      <hot-mall :data="mallList" @refreshMall="refreshMall"></hot-mall>
      <coupon-tab :data="couponTab" @clickTab="clickTab" :tabFixed="tabFixed"></coupon-tab>
      <coupon-group :data="couponList" :loading="loading"></coupon-group>
      <!-- 筛选面板 -->
      <coupon-filter></coupon-filter>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Slide from 'components/slide/slide'
import HotMall from 'components/hot-mall/hot-mall'
import CouponTab from 'components/coupon-tab/coupon-tab'
import CouponGroup from 'components/coupon-group/coupon-group'
import CouponFilter from 'components/coupon-filter/coupon-filter'
import { getMoreMall, getMoreCoupon } from '@/api/index'
import { couponSlide, couponTab } from 'static/data'

const mallTotal = 8   // 热门商城图标常量

export default {
  data () {
    return {
      slider: couponSlide,
      mallList: [],
      mallPage: 1,
      couponTab: couponTab,
      couponKey: 'c_cate',
      couponValue: 'jingxuan',
      couponPage: 1,
      couponList: [],
      couponTotal: 0,
      loading: true,
      tabFixed: false
    }
  },
  created () {
    this._getMoreMall()
    this._getMoreCoupon()
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
    },
    _getMoreCoupon () {
      getMoreCoupon(this.couponKey, this.couponValue, this.couponPage).then((res)=>{
        if(res.error_code === 0){
          this.couponList = res.data.rows
          this.couponTotal = res.data.total
        }
      }).catch((e)=>{
        console.log(e)
      })
    },
    getMore () {
      if(this.couponTotal === this.couponList.length){
        this.loading = false
      }else{
        this.couponPage++
        getMoreCoupon(this.couponKey, this.couponValue, this.couponPage).then((res)=>{
          if(res.error_code === 0){
            this.couponList = this.couponList.concat(res.data.rows)
            this.couponTotal = res.data.total
          }
        }).catch((e)=>{
          console.log(e)
        })
      }
    },
    clickTab (item) {
      this.couponKey = item.key
      this.couponValue = item.value
      this.couponPage = 1
      this.couponList = []
      this.loading = true
      if(item.value != 'youhui') this._getMoreCoupon()
    },
    // scrollOpera (pos) {
    //   let posL = parseFloat(pos.y);
    //   this.tabFixed = (posL<-350) ? true : false;
    // }
  },
  components: {
    Scroll,
    Slide,
    HotMall,
    CouponTab,
    CouponGroup,
    CouponFilter
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
