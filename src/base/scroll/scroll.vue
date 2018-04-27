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
                click: this.click
            })
            if(this.pullup){
                this.scroll.on('scrollEnd', ()=>{
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollToEnd')
                    }
                })
            }
        },
        refresh () {
            this.scroll && this.scroll.refresh()
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