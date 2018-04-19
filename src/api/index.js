import axios from 'axios'

export function getIndex(){
    const url = 'https://m.smzdm.com/ajax_home_list_show'
    return axios.get('/ajax_home_list_show', {
        params: {
            timesort: 152379720467
        }
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}