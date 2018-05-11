<template>
  <div class="feed-tab-normal">
    <scroll class="feed-tab-box" :scrollX="true" :data="data" ref="tabWraper">
      <ul class="feed-tab-list" ref="tabWrap">
        <li v-for="(item, index) in data" :key="index" ref="tabItem" :class="(tabIndex === index) ? 'active' : ''" @click="clickTab(item, index)"><span>{{item.text}}</span></li>
      </ul>
    </scroll>
    <div class="tab-choose-box">
      <div class="choose-bg">筛选<em></em></div>
    </div>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  mounted () {
    let tabwidth = 0
    for(let i = 0;i < this.data.length;i++){
      tabwidth+=this.$refs.tabItem[i].getBoundingClientRect().width
    }
    this.$refs.tabWrap.style.width = tabwidth + 'px'
    this.$refs.tabWraper.refresh()
  },
  methods: {
    clickTab (item, index) {
      this.tabIndex = index
      this.$emit('clickTab', item)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .feed-tab-normal
    display: flex
    height: 36px
    
    background-color: #fff
    border-bottom: 1px solid #eee
    
  .tab-choose-box
    font-size: 13px
    color: #666
    float: right
    height: 36px
    line-height: 36px
    background: url('./grey-block.png') no-repeat 0 0
    background-size: 6px 36px
    padding-left: 6px
    margin-left: -6px
    position: relative
    z-index: 2
    width: 69px
    flex: 0 0 69px
    margin-left: 5px
    .choose-bg
      background-color: #f5f5f5
      padding: 0 15px
    em
      width: 0
      height: 0
      border-width: 4px
      border-color: #666 transparent transparent
      border-style: solid
      line-height: normal
      margin-left: 5px
      float: right
      margin-top: 16px
      transition: all .2s linear
      -webkit-transform-origin: center 2px
      transform-origin: center 2px
  .tab-scroll
    overflow: hidden
    flex: 1
  .feed-tab-box
    flex: 1
    overflow: hidden
    padding-right: 5px
    .feed-tab-list
      background-color: #fff
      float:left
      display: flex
      li
        float: left
        display: block
        padding: 0 15px
        box-sizing: border-box
        border-bottom: 2px solid transparent
        background-color: #fff
        white-space: nowrap
        line-height: 34px
        span
          text-align: center
          color: #666
          font-size: 15px
        &.active
          border-bottom-color: $color-highlight
          span
            color: $color-highlight
</style>
