<template>
  <div class="wrap-content">
    <scroll ref="scroll" class="wrap-content" :data="cardList" :pullup="true" @scrollToEnd="getMore">
      <div>
        <card-group :cardList="cardList"></card-group>
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import CardGroup from 'components/card-group/card-group'
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
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.lastTimeout = initTimeout[this.$route.name]
      this.cardList = null
      getList(this.$route.name, this.lastTimeout).then((res) => {
        if(res.message == 1) this.cardList = res.data
        this.lastTimeout = this.cardList[this.cardList.length-1].time_sort
      }).catch((err) =>{
        console.log(err)
      })
    },
    getMore () {
      getList(this.$route.name, this.lastTimeout).then((res) => {
        if(res.message == 1) this.cardList = this.cardList.concat(res.data)
        this.lastTimeout = this.cardList[this.cardList.length-1].time_sort
      }).catch((err) =>{
        console.log(err)
      })
    }
  },
  components: {
    Loading,
    Scroll,
    CardGroup
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