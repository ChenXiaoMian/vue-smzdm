<template>
  <div>
    <header-top>
      <header-logo slot="logo"></header-logo>
    </header-top>
    <div class="classifys">
      <ul class="primary-cla">
        <li v-for="(item, index) in priCla" @click="selectPri(index)" :key="index" :class="(index === priIndex) ? 'cur-class' : ''">{{item.text}}</li>
      </ul>
      <div class="cla-box">
        <ul class="spe-cha" v-show="priIndex===0">
          <li class="spe-chali" v-for="(item, index) in priSub" :key="index"><a :href="item.url"><p>{{item.text}}</p><span></span></a></li>
        </ul>
        <div class="cla-wrap z-clearfix" v-show="priIndex===sitem.findex" v-for="(sitem, sindex) in fenlei" :key="sindex">
          <div class="spe-chali">
            <a href="/"><p>全部</p><span></span></a>
          </div>
          <ul class="clawrap-ul" v-for="(citem, cindex) in sitem.children" :key="cindex">
            <li>
              <div class="spe-chali"><p>{{citem.cate}}</p></div>
            </li>
            <div class="channel-span">
              <span v-for="(zitem, zindex) in citem.children" :key="zindex"><a :href="zitem.url">{{zitem.text}}</a></span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import HeaderLogo from 'components/header-logo/header-logo'
import { priCla, priSub, fenlei } from 'static/data'
export default {
  data () {
    return {
      priCla: priCla,
      priIndex: 0,
      priSub: priSub,
      fenlei: fenlei
    }
  },
  methods: {
    selectPri (index) {
      this.priIndex = index
    }
  },
  components: {
    HeaderTop,
    HeaderLogo
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  .cla-box, .primary-cla
    height: 100%
    overflow-y: scroll
    background-color: #fff
  .classifys
    overflow: hidden
    top: 44px
    bottom: 0
    z-index: 99
    background: #fff
    width: 100%
    position: fixed
    max-width: 750px
    .primary-cla
      width: 26%
      height: 100%
      box-sizing: border-box
      border-right: 1px solid #ddd
      float: left
    li
      height: 43px
      width: 100%
      line-height: 43px
      font-size: 13px
      text-align: center
      overflow: hidden
    .cur-class
      font-size: 14px!important
      background: #f04848
      color: #fff
      box-shadow: inset 0 4px 8px 0 rgba(50,50,50,.1), inset 0 0 0 0 #000, inset 0 0 0 0 #000, inset 0 0 0 0 #000
    .cla-box
      width: 74%
      height: 100%
      float: right
      overflow-y: auto
      .spe-chali
        border-bottom: 1px solid #ddd
        height: 42px
        line-height: 42px
        font-size: 12px
        span
          width: 16px
          height: 16px
          display: inline-block
          float: right
          margin-right: 20px
          background-size: contain
          background-image: url('./arrow_w.png')
          margin-top: 13px
        a
          display: block
          color: #000
          width: 100%
          height: 100%
        p
          margin: 0
          float: left
          margin-left: 38px
          width: 120px
          font-size: 13px
          line-height: 43px
          text-align: left
    .cla-wrap
      a
        display: block
        color: #333
        line-height: 15px
      li
        height: auto
    .clawrap-ul
      li
        box-shadow: inset 0 4px 8px 0 rgba(50,50,50,.1), inset 0 0 0 0 #000, inset 0 0 0 0 #000, inset 0 0 0 0 #000
    .channel-span
      box-sizing: border-box
      width: 100%
      padding-left: 15px
      text-align: left
      span
        font-size: 13px
        padding: 5px 10px
        border: 1px solid #ddd
        border-radius: 5px
        display: block
        float: left
        margin: 10px 7px 7px
</style>
