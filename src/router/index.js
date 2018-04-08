import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'layout/index/index'
import YouHui from 'layout/youhui/youhui'

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/youhui',
            component: YouHui
        }
    ]
})