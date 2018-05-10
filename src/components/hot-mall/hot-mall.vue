<template>
  <div class="hot-mall">
    <div class="hot-mall-title">
      <span class="refresh" @click="refreshMall"><i class="z-icon-refresh"></i>换一批</span>
      热门商城
    </div>
    <ul class="hot-mall-list z-clearfix">
      <li v-for="(item, index) in data" :key="index"><a :href="item.url"><img :src="filterPic(item.pic)" :data-mall="item.title"></a></li>
    </ul>
  </div>
</template>

<script>
import { filterMixin } from '@/api/mixins'

export default {
  mixins: [filterMixin],
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    refreshMall () {
      this.$emit('refreshMall')
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .hot-mall
    margin-bottom: 5px
    background-color: #fff
    overflow: hidden
    .hot-mall-title
      height: 33px
      line-height: 33px
      border-bottom: 1px solid #f6f6f6
      padding: 0 4%
      position: relative
      background-color: #fff
      font-size: 14px
      color: #777
      &:before
        position: absolute
        content: ""
        display: block
        height: 0
        width: 0
        left: 0
        top: 0
        border-width: 7px
        border-color: $color-highlight transparent transparent $color-highlight
        border-style: solid
      .refresh
        float: right
        color: $color-highlight
        font-size: 13px
        i
          vertical-align: -2px
          margin-right: 3px
    .hot-mall-list
      li
        width: 25%
        float: left
        min-height: 41px
        a
          display: block
          border-right: 1px solid #f6f6f6
          border-bottom: 1px solid #f6f6f6
          padding: 12px
          min-height: 26px
          text-align: center
        img
          width: 100%
          min-height: 26px
          display: block
  .z-icon-refresh
    background-position: 0 -157px
    width: 13px
    height: 13px
</style>
