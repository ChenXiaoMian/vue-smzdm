<template>
  <div>
    <header-top></header-top>
    <div class="swiper-container">
      <slide :data="slider"  v-if="slider.length"></slide>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import Slide from 'components/slide/slide'
import { slider } from 'static/data'

export default {
  data () {
    return {
      slider: slider
    }
  },
  components: {
    HeaderTop,
    Slide
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/base'
  @import '~assets/scss/variable'

  .swiper-container
    positive: relative
    width: 100%
    overflow: hidden
</style>
