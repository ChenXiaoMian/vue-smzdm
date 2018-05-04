# vue-smzdm
Vue仿什么值得买

# 开发记录

## 2018.5.4

问题：使用 `<router-link>` 组件应用导航的时候，匹配的路径会显示 `router-link-exact-active` 和 `router-link-active` 两个类名。其中 `router-link-exact-active` 为精准匹配的时候才显示。而内页导航要显示高亮的时候，会匹配到 `/` 这个路径。

解决：单独拎出`首页`链接，额外增加一个属性 `exact` 显示为 `<router-link to="/" exact>`，这个链接只会在地址为 `/` 的时候被激活。只需要给 `router-link-active` 额外增加高亮样式。


问题：增加商品列表页及嵌套路由的时候，需要响应路由参数的变化，例如从 `/youhui` 导航到 `/haitao`，**原来的组件实例 `list` 会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。

解决：可参照官方文档[vue-router数据获取](https://router.vuejs.org/zh-cn/advanced/data-fetching.html)