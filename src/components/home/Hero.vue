<template>
  <div class="hero">
    <div class="abs">
      <Navbar style="background-color: rgba(1, 1, 1, 0)" :needToHide="false"></Navbar>
      <section class="intro"></section>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'hero',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="sass">
.hero
  z-index: 15
  height: 100vh
  position: relative
  background: url("../../assets/home1.jpg") center center no-repeat fixed
@media screen and (max-width: 900px)
  .hero
    background: url("../../assets/home_img2.jpg") no-repeat
    background-size: 100% 100%
    height: 178vw
</style>
