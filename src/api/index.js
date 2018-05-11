import axios from 'axios'
import { channelUrl } from './config'

// 获取首页数据
export function getIndex(timesort){
    // const url = 'https://m.smzdm.com/ajax_home_list_show'
    return axios.get('/ajax_home_list_show', {
        params: {
            timesort: timesort
        }
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}

// 获取推荐商品
export function getRecommend(timesort, channel_id, article_id){
    return axios.get('/ajax_hot_recommend', {
        params: {
            timesort,
            channel_id,
            article_id
        }
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}

// 获取列表数据
export function getList(url, params){
    let curl = channelUrl[url]
    return axios.get(curl, {
        params
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}

// 获取优惠券热门商城
export function getMoreMall(page) {
    return axios.get('https://h5.smzdm.com/user/coupon/ajax_hot_mall_more',{
        params: {
            page
        }
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}

// 获得优惠券数据
export function getMoreCoupon(key, value, page) {
    let params = {}
    if(key === 'c_cate'){
        params = {
            c_cate: value,
            page
        }
    }else if(key === 'mall_cate'){
        params = {
            mall_cate: value,
            page
        }
    }
    return axios.get('https://h5.smzdm.com/user/coupon/ajax_search_coupon_data_more',{
        params
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}