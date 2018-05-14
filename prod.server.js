var express = require('express');
var axios = require('axios');

var app = express();
var port = 9191;
var apiRoutes = express.Router();

apiRoutes.get('/ajax_home_list_show',function(req,res){
  var url = 'https://m.smzdm.com/ajax_home_list_show';

  axios.get(url,{
    headers: {
      referer: 'https://m.smzdm.com/',
      host: 'm.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_hot_recommend',function(req,res){
  var url = 'https://m.smzdm.com/ajax_hot_recommend';
  axios.get(url,{
    headers: {
      referer: 'https://m.smzdm.com/',
      host: 'm.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_post_list_show',function(req,res){
  var url = 'https://m.smzdm.com/ajax_post_list_show';

  axios.get(url,{
    headers: {
      referer: 'https://m.smzdm.com/',
      host: 'm.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_haitao_list_show',function(req,res){
  var url = 'https://haitao.m.smzdm.com/ajax_haitao_list_show';

  axios.get(url,{
    headers: {
      referer: 'https://haitao.m.smzdm.com/',
      host: 'haitao.m.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_faxian_list_show',function(req,res){
  var url = 'https://faxian.m.smzdm.com/ajax_faxian_list_show';

  axios.get(url,{
    headers: {
      referer: 'https://faxian.m.smzdm.com/',
      host: 'faxian.m.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_get_list_html',function(req,res){
  var url = 'https://post.m.smzdm.com/ajax_get_list_html';

  axios.get(url,{
    headers: {
      referer: 'https://post.m.smzdm.com/',
      host: 'post.m.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

apiRoutes.get('/ajax_search_list',function(req,res){
  var url = 'https://m.smzdm.com/search/ajax_search_list';

  axios.get(url,{
    headers: {
      referer: 'https://m.smzdm.com/',
      host: 'm.smzdm.com'
    },
    params: req.query
  }).then((response)=>{
    res.json(response.data);
  }).catch((e)=>{
    console.log(e);
  });
});

// apiRoutes.get('/y',function(req,res){
//   var url = 'https://y.zdmimg.com/';
  
//   axios.get(url,{
//     headers: {
//       referer: 'https://h5.smzdm.com/user/coupon/coupon_list?f=wap',
//       host: 'y.zdmimg.com'
//     },
//     params: req.query
//   }).then((response)=>{
//     res.json(response.data);
//   }).catch((e)=>{
//     console.log(e);
//   });
// });

app.use(apiRoutes)

app.use(express.static('./dist'));

module.exports = app.listen(port,function(err){
  if(err){
      console.log(err);
      return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});