import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'layout/index/index'
import Inner from 'layout/inner/inner'
import List from 'layout/list/list'
import Multi from 'layout/multi/multi'
import Goods from 'layout/goods/goods'
import Post from 'layout/post/post'
import Fenlei from 'layout/fenlei/fenlei'
import Coupon from 'layout/coupon/coupon'

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
        },
        {
            path: '/faxian',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'faxian',
                    component: Multi
                }
            ]
        },
        {
            path: '/post',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'post',
                    component: List
                },
                {
                    path: ':id',
                    component: Post
                }
            ]
        },
        {
            path: '/baicai',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'baicai',
                    component: List
                },
                { 
                    path: ':id',
                    component: Goods
                }
            ]
        },
        {
            path: '/fenlei',
            component: Fenlei,
            name: 'fenlei'
        },
        {
            path: '/coupon',
            component: Inner,
            children: [
                {
                    path: '',
                    name: 'coupon',
                    component: Coupon
                }
            ]
        }
    ]
})