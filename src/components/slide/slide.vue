<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <div v-for="(item,index) in data" :key="index" class="slider-item">
        <a :href="item.url"><img :src="item.img" alt=""></a>
      </div>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :key="index" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    setTimeout(()=>{
      this._setSliderWidth();
      this._initDots();
      this._initSlider();
      if(this.autoPlay){
        this._play();
      }
    },20)
    window.addEventListener('resize', ()=>{
      if(!this.slider) return
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    _initSlider () {
      var _this = this
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: _this.loop,
          threshold: 0.3
        },
        snapSpeed: 400,
        click: true
      })
      this.slider.on('scrollEnd', ()=>{
        let pageIndex = _this.slider.getCurrentPage().pageX
        _this.currentPageIndex = pageIndex
        if(_this.autoPlay){
          clearTimeout(this.timer);
          _this._play()
        }
      })
    },
    _setSliderWidth (isResize) {
      clearTimeout(this.timer)
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for(let i=0;i<this.children.length;i++){
        let child = this.children[i]
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if(this.loop && !isResize){
        width += 2 * sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _play () {
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.slider.next(400)
      },this.interval)
    },
    _initDots () {
      this.dots = new Array(this.children.length);
    }
  },
  destroyed () {
    clearTimeout(this.timer);
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'

  .slider
    min-height: 1px
    position: relative
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>