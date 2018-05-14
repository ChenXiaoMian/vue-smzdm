<template>
  <scroll ref="scroll" class="wrap-content" :data="cardList" :pullup="true" @scrollToEnd="getMore">
    <div>
      <multi-group :cardList="cardList"></multi-group>
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import MultiGroup from 'components/multi-group/multi-group'
import { getList } from '@/api/index'
import { initTimeout } from '@/api/config'
import { remMixin } from '@/api/mixins'

export default {
  mixins: [remMixin],
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
      if(this.$route.name != 'undefined'){
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
      }
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
  
</style>