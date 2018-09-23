<template>
  <nav :id="navId" :class="{ hide: reallyNeedToHide }">
    <router-link to="/" class="first">Drafting Dreams</router-link>
    <router-link to="/articles" class="responsivePadding">Articles</router-link>
    <router-link to="/notes" class="responsivePadding">Notes</router-link>
    <router-link to="/resume" class="responsivePadding">Messages</router-link>
  </nav>
</template>

<style lang="sass">
  @media screen and (max-width: 1020px)
    .hide
      display: none!important
  #nav
    z-index: 10
    padding: 0 40px 0 40px
    background-color: black
    opacity: 0.8
    display: flex
    align-items: center
    a
      height: 100%
      padding: 20px

    a:hover
      color: #47ffb9

    .first
      font-size: 2rem
      flex-grow: 1
      text-align: left
      color: aquamarine !important
  @media screen and (min-width: 1020px)
    #nav
      position: fixed
      left: 0
      top: 0
      right: 0
  @media screen and (max-width: 1020px)
    #nav
      justify-content: center
      padding: 0
      .first
        display: none
      .responsivePadding
        padding: 20px 5px 20px 5px
  #otherNav
    z-index: 14
    padding: 0 40px 0 40px
    background-color: black
    opacity: 0.8
    display: flex
    align-items: center
    position: fixed
    right: 0
    left: 0
    top: 0
    a
      height: 100%
      padding: 20px

    a:hover
      color: #47ffb9

  .first
    font-size: 2rem
    flex-grow: 1
    text-align: left
    color: aquamarine !important

  @media screen and (max-width: 1020px)
    #otherNav
      padding: 0
  @media screen and (max-width: 800px)
    #otherNav
      padding: 0
      a
        padding: 10px
        font-size: 0.8rem
      .first
        font-size: 1.5rem
    /*@media screen and (max-width: 1020px)*/
      /*#otherNav*/
        /*justify-content: center*/
        /*padding: 0*/
        /*.first*/
          /*display: none*/
        /*.responsivePadding*/
          /*padding: 20px 5px 20px 5px*/
</style>

<script>
export default {
  name: 'navbar',
  props: {
    needToHide: Boolean
  },
  computed: {
    isHomePath: function () {
      return this.$route.path === '/'
    },
    reallyNeedToHide: function () {
      return this.isHomePath && this.needToHide
    },
    navId: function () {
      return this.isHomePath ? 'nav' : 'otherNav'
    }
  }
}
</script>
