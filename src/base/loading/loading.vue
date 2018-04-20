<template>
  <div class="loading" ref="jLoading">
    <img src="./loading.gif" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .loading
    width: 100%
    margin: 0 auto
    height: 24px
    padding: 15px 0
    background-color: $bg-common
    text-align: center
    img
      height: 24px
      vertical-align: top
</style>
