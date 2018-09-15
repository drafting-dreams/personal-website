<template>
  <div id="app">
    <Navbar style="background-color: white" :needToHide="hideNav"></Navbar>
    <router-view/>
  </div>
</template>

<style lang="sass">
  html
    font-size: 14px
    body
      margin: 0
    div
      box-sizing: border-box
      margin: 0
      padding: 0
    a
      text-decoration: none
    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      color: #2c3e50

      a
        font-weight: bold
        color: #2c3e50
        &.router-link-exact-active
          color: #42b983

</style>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  data: function () {
    return {
      hideNav: true
    }
  },
  components: {
    Navbar
  }
}
</script>
