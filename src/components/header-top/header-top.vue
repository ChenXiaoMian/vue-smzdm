<template>
  <div class="header-top">
    <div class="header-in fixed">
      <slot name="logo"></slot>
      <slot name="tab"></slot>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'

  .header-top
    max-width: 750px
    margin: 0 auto
    background: #fff
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
</style>
