<template>
  <div class="wrap-content">
    <scroll ref="scroll" class="wrap-content" :data="cardList" :pullup="true" @scrollToEnd="getMore">
      <div>
        <multi-group :cardList="cardList"></multi-group>
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import MultiGroup from 'components/multi-group/multi-group'
import { getList } from '@/api/index'
import { initTimeout } from '@/api/config'

export default {
  data () {
    return {
      cardList: null,
      lastTimeout: initTimeout[this.$route.name]
    }
  },
  created () {
    this.getRem()
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    getRem () {
      var $html = document.querySelector('html');
      var oWidth = $html.clientWidth || document.documentElement.clientWidth;
      if (oWidth > 750) {
          $html.style.fontSize = 750 / 10 + 'px';
      } else {
          $html.style.fontSize = oWidth * .1 + 'px';
      }
    },
    fetchData () {
      let cfg = {}
      this.lastTimeout = initTimeout[this.$route.name]
      this.cardList = null
      cfg.timesort = this.lastTimeout
      getList(this.$route.name, cfg).then((res) => {
        if(res.message == 0) this.cardList = res.data
        this.lastTimeout = this.cardList[this.cardList.length-1].last_item
      }).catch((err) =>{
        console.log(err)
      })
    },
    getMore () {
      let cfg = {}
      cfg.timesort = this.lastTimeout
      getList(this.$route.name, cfg).then((res) => {
        if(res.message == 0) this.cardList = this.cardList.concat(res.data)
        this.lastTimeout = this.cardList[this.cardList.length-1].last_item
      }).catch((err) =>{
        console.log(err)
      })
    }
  },
  components: {
    Loading,
    Scroll,
    MultiGroup
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .wrap-content
    position: fixed
    top: 85px
    bottom: 0
    width: 100%
    left: 0
</style>