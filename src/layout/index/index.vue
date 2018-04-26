<template>
  <div>
    <header-top></header-top>
    <scroll ref="scroll" class="wrap-content" :data="cardList">
      <div>
      <div class="swiper-container">
        <slide :data="slider"  v-if="slider.length"></slide>
      </div>
      <card-group :cardList="cardList"></card-group>
      <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import Slide from 'components/slide/slide'
import CardGroup from 'components/card-group/card-group'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
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
    CardGroup,
    Loading,
    Scroll
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">  
  .swiper-container
    position: relative
    width: 100%
    overflow: hidden
  .wrap-content
    position: fixed
    top: 85px
    bottom: 0
    width: 100%
    left: 0
</style>
