<template>
  <scroll ref="scroll" class="wrap-content" :data="cardList" :pullup="true" @scrollToEnd="getMore">
    <div>
      <card-group :cardList="cardList"></card-group>
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import CardGroup from 'components/card-group/card-group'
import { getList } from '@/api/index'
import { initTimeout, bcParams } from '@/api/config'

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
      let cfg = {}
      this.lastTimeout = initTimeout[this.$route.name]
      this.cardList = null
      cfg.timesort = this.lastTimeout
      if(this.$route.name === 'baicai') cfg = Object.assign(cfg, bcParams)
      getList(this.$route.name, cfg).then((res) => {
        if(res.data.length>0) this.cardList = res.data
        this.lastTimeout = this.cardList[this.cardList.length-1].time_sort
      }).catch((err) =>{
        console.log(err)
      })
    },
    getMore () {
      let cfg = {}
      cfg.timesort = this.lastTimeout
      if(this.$route.name === 'baicai') cfg = Object.assign(cfg, bcParams)
      getList(this.$route.name, cfg).then((res) => {
        if(res.data.length>0) this.cardList = this.cardList.concat(res.data)
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

</style>