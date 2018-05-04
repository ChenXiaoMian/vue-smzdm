<template>
  <div>
    <header-top>
      <header-logo slot="logo"></header-logo>
      <header-tab slot="tab"></header-tab>
    </header-top>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from 'components/header-top/header-top'
import HeaderLogo from 'components/header-logo/header-logo'
import HeaderTab from 'components/header-tab/header-tab'
export default {
  components: {
    HeaderTop,
    HeaderLogo,
    HeaderTab
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  
</style>