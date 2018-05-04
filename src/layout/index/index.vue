<template>
  <div>
    <header-top>
      <header-logo slot="logo"></header-logo>
      <header-tab slot="tab"></header-tab>
    </header-top>
    <scroll ref="scroll" class="wrap-content" :data="cardList" :pullup="true" @scrollToEnd="getMore">
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
import HeaderLogo from 'components/header-logo/header-logo'
import HeaderTab from 'components/header-tab/header-tab'
import Slide from 'components/slide/slide'
import CardGroup from 'components/card-group/card-group'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import { slider } from 'static/data'
import { getIndex } from '@/api/index'
import { initTimeout } from '@/api/config'

export default {
  data () {
    return {
      slider: slider,
      cardList: [],
      lastTimeout: initTimeout['index']
    }
  },
  created () {
    this._getIndex();
  },
  methods: {
    _getIndex () {
      getIndex(this.lastTimeout).then((res) => {
          if(res.message == 1) this.cardList = res.data
          // 获取最后一个timeout
          this.lastTimeout = this.cardList[this.cardList.length-1].timesort
      }).catch((err) => {
          console.log(err);
      });
    },
    getMore () {
      getIndex(this.lastTimeout).then((res) => {
        if(res.message == 1) this.cardList = this.cardList.concat(res.data)
        this.lastTimeout = this.cardList[this.cardList.length-1].timesort
      }).catch((err) => {
          console.log(err);
      });
    }
  },
  components: {
    HeaderTop,
    HeaderLogo,
    HeaderTab,
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
