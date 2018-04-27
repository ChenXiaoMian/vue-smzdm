import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'layout/index/index'
import YouHui from 'layout/youhui/youhui'
import Goods from 'layout/goods/goods'

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/youhui',
            component: YouHui
        },
        {
            path: '/goods',
            component: Goods,
            children: [
                {
                    path: ':id',
                    component: Goods
                }
            ]
        }
    ]
})