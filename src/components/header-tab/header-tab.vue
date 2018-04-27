<template>
  <div class="header-tab">
    <div class="header-inner">
        <scroll class="channel-list" :scrollX="true" :data="navs">
            <ul>
                <li v-for="(item, index) in navs" :key="index"><router-link :to="item.url">{{item.text}}</router-link></li>
            </ul>
        </scroll>
        <div class="all-tabs">
            <router-link to="/fenlei">
              <i class="icon-tab-list"></i>
              <span>分类</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import { navs } from 'static/data'

export default {
  data () {
    return {
      navs: navs
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'

  .header-tab
    display: block
    height: 40px
    border-bottom: 1px solid #e0e4e7
    background: #fff
    box-shadow: 4px 0 8px rgba(0,0,0,.08)
    .header-inner
      width: 100%
      height: 100%
      display: flex
      background-color: #fff
    .channel-list
      flex: 1
      height: 100%
      overflow: hidden
      ul
        float: left
        display: flex
      li
        line-height: 40px
        position: relative
        float: left
        margin: 0 12px
        white-space: nowrap
        font-size: $font-size-medium
        a
          font-size: $font-size-medium-x
          color: $color-text
          font-weight: 700
          &.router-link-exact-active
            color: $color-highlight
          &.router-link-exact-active:before
            content: ""
            display: block
            width: 25px
            height: 4px
            background: $color-highlight
            position: absolute
            bottom: 0
            left: 50%
            margin-left: -12px
    .all-tabs
      float: right
      width: 60px
      height: 100%
      position: relative
      text-align: center
      i
        display: inline-block
        width: 13px
        height: 100%
        vertical-align: middle
        background: url('./icon-class.png') no-repeat center left
        background-size: contain
      > a
        display: block
        width: 100%
        height: 100%
        font-size: $font-size-medium
      span
        display: inline-block
        vertical-align: middle
        font-size: $font-size-small
        margin-left: 2px
        color: $color-text
      &:before
        content: ""
        display: block
        width: 6px
        height: 100%
        position: absolute
        left: -6px
        top: 0
        background: url('./line.png') no-repeat center left
        background-size: contain
</style>
