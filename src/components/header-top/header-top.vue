<template>
  <div class="header-top">
    <div class="header-in fixed">
      <div class="header-white">
        <div class="logo-img">
          <router-link to="/">
            <img src="./logo.png" alt="">
          </router-link>
        </div>
        <div class="logo-download">
          <router-link to="/">下载APP</router-link>
        </div>
      </div>
      <slot>
        <header-tab :navs="navs"></header-tab>
      </slot>
    </div>  
  </div>
</template>

<script>
import HeaderTab from 'components/header-tab/header-tab'
import { navs } from 'static/data'
export default {
  data () {
    return {
      navs: navs
    }
  },
  components: {
    HeaderTab
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/base'
  @import '~assets/scss/variable'

  .header-top
    max-width: 750px
    margin: 0 auto
    background: #fff
    height: 85px
    position: relative
    z-index: 100
    .header-in
      max-width: 750px;
      margin: 0 auto;
      background: #fff;
      -webkit-transform: translateZ(0);
      &.fixed
        position: fixed
        left: 0
        top: 0
        right: 0
        z-index: 100
  .header-white
    padding: 9px 15px
    height: 44px
    overflow: hidden
    background-color: #fff
    width: 100%
    box-sizing: border-box
    border-bottom: 1px solid #ddd
    .logo-img
      float: left
      width: 107px
      height: 25px
      img
        width: 100%
        display: block
    .logo-download
      margin-top: 2px
      float: right
      border: 1px solid $color-highlight
      height: 20px
      border-radius: 20px
      line-height: 20px
      padding-left: 6px
      padding-right: 6px
      font-size: 11px
      text-align: center
      a
        color: $color-highlight
</style>
