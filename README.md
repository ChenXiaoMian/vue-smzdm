# vue-smzdm
Vue仿什么值得买

## 前言

平时从张大妈（ZDM）褥羊毛褥多了，正好用vue做了这个练手项目。

由于获取真实数据有限，所以项目并没有全部完成，仅限基本功能。

## 技术栈

- [x] vue-cli脚手架(vue + vuex + vue router + es6)
- [x] axios、jsonp
- [x] better-scroll、vue-lazyload
- [x] normalize.css

## 完成功能

- [x] 首页
- [x] 商品列表页
- [x] 商品详情页
- [x] 文章列表页
- [x] 分类页
- [ ] 优惠券页 

## 排坑记录

### 2018.5.4

1、问题：使用 `<router-link>` 组件应用导航的时候，匹配的路径会显示 `router-link-exact-active` 和 `router-link-active` 两个类名。其中 `router-link-exact-active` 为精准匹配的时候才显示。而内页导航要显示高亮的时候，会匹配到 `/` 这个路径。

解决：单独拎出`首页`链接，额外增加一个属性 `exact` 显示为 `<router-link to="/" exact>`，这个链接只会在地址为 `/` 的时候被激活。只需要给 `router-link-active` 额外增加高亮样式。

----

2、问题：增加商品列表页及嵌套路由的时候，需要响应路由参数的变化，例如从 `/youhui` 导航到 `/haitao`，**原来的组件实例 `list` 会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。

解决：可参照官方文档[vue-router数据获取](https://router.vuejs.org/zh-cn/advanced/data-fetching.html)

### 2018.5.10

3、问题：使用 `[better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)`做导航横向滚动的时候，发现根本滚动不了。

解决：** 横向滚动的时候，相比纵向滚动一定要动态的计算滚动区的宽度。 **