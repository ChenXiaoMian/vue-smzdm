<template>
  <div>
    <header-top></header-top>
    <div class="swiper-container">
      <slide :data="slider"  v-if="slider.length"></slide>
    </div>
    <div class="wrap-content">
      <card-group :cardList="cardList"></card-group>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import Slide from 'components/slide/slide'
import CardGroup from 'components/card-group/card-group'
import { slider } from 'static/data'
import { getIndex } from '@/api/index'

export default {
  data () {
    return {
      slider: slider,
      cardList: []
    }
  },
  created () {
    this._getIndex();
  },
  methods: {
    _getIndex () {
      getIndex().then((res) => {
          if(res.message == 1) this.cardList = res.data
      }).catch((err) => {
          console.log(err);
      });
    }
  },
  components: {
    HeaderTop,
    Slide,
    CardGroup
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
