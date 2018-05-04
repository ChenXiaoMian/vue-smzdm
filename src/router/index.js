import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'layout/index/index'
import Inner from 'layout/inner/inner'
import List from 'layout/list/list'
import Goods from 'layout/goods/goods'

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/youhui',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'youhui',
                    component: List
                },
                { 
                    path: ':id',
                    component: Goods
                }
            ]
        },
        {
            path: '/haitao',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'haitao',
                    component: List
                },
                { 
                    path: ':id',
                    component: Goods
                }
            ]
        }
    ]
})