<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .fade-enter-active, .fade-leave-active
    transition: opacity .3s;
  .fade-enter, .fade-leave-to
    opacity: 0;
</style>
