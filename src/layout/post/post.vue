<template>
  <div>
    <div class="details-title details-title-post z-clearfix">
      <h1 class="title-post">说说手机那些事儿 篇三：琳琅满目选哪款？详解TOP10厂商热销机的代工与系统</h1>
      <div class="grey ellipsis grey-post">
          <img src="https://avatarimg.smzdm.com/default/9176904209/572080e969a8e-big.jpg" alt="">
          <span class="author">lanwellon</span>
          <span class="line"></span>
          <span class="time">16:30</span>
      </div>
      <div class="detail-banner">
        <img src="https://qna.smzdm.com/201805/03/5aea5f8a292b71966.jpg_c640.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
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
      let cfg = {}
      this.lastTimeout = initTimeout[this.$route.name]
      this.cardList = null
      cfg.timesort = this.lastTimeout
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
      getList(this.$route.name, cfg).then((res) => {
        if(res.data.length>0) this.cardList = this.cardList.concat(res.data)
        this.lastTimeout = this.cardList[this.cardList.length-1].time_sort
      }).catch((err) =>{
        console.log(err)
      })
    }
  },
  components: {
    
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