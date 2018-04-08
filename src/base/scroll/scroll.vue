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