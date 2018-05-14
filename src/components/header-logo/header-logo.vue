<template>
  <div class="header-white">
    <div class="logo-img">
      <router-link to="/" exact>
        <img src="./logo.png" alt="">
      </router-link>
    </div>
    <div class="logo-download">
      <router-link to="/" exact>下载APP</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
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
