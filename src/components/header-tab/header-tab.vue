<template>
  <div class="header-tab">
    <div class="header-inner">
        <div class="channel-list">
            <ul>
                <li><router-link to="/">首页</router-link></li>
            </ul>
        </div>
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
export default {

}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/base'
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
      li
        line-height: 40px
        position: relative
        float: left
        margin: 0 12px
        white-space: nowrap
        font-size: 14px
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
        font-size: 14px
      span
        display: inline-block
        vertical-align: middle
        font-size: 12px
        margin-left: 2px
        color: $color-text
</style>
