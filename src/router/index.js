import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../layout/home/home'
// const Home = () => import('components/recommend/recommend')

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})