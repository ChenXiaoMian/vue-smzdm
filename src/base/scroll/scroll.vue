<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        scrollX: {
            type: Boolean,
            default: false
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        },
        pullup: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        listenScroll: {
            type: Boolean,
            default () {
                return false
            }
        },
        probeType: {
            type: Number,
            default () {
                return 1
            }
        }
    },
    mounted () {
        setTimeout(()=>{
            this._initScroll()
        },20)
    },
    methods: {
        _initScroll () {
            if(!this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper,{
                scrollX: this.scrollX,
                scrollY: !this.scrollX,
                click: this.click,
                probeType: this.probeType
            })
            if(this.pullup){
                this.scroll.on('scrollEnd', ()=>{
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollToEnd')
                    }
                })
            }            
            if(this.listenScroll){
                let _this = this
                this.scroll.on('scroll', (pos) => {
                    _this.$emit('scroll', pos)
                })
            }
        },
        refresh () {
            this.scroll && this.scroll.refresh()
        },
        scrollTo () {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        }
    },
    watch: {
        data () {
            setTimeout(()=>{
                this.refresh()
            },this.refreshDelay)
        }
    }
}
</script>