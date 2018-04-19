const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    },
    devServer: {
        proxy: {
            '/ajax_home_list_show': {
                target: 'https://m.smzdm.com/',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/tpy': {
                target: 'https://tp-y.zdmimg.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpy' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/tpQny': {
                target: 'https://tp-qny.smzdm.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpQny' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            }
        }
    }
}