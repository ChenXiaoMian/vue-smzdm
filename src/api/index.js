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
export function getList(url, timesort){
    let curl = channelUrl[url]
    return axios.get(curl, {
        params: {
            timesort
        }
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}