import axios from 'axios'

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