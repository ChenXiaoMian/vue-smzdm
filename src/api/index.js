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