<template>
  <div class="home">
    <Hero></Hero>
    <HelloThere></HelloThere>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero.vue'
import HelloThere from '@/components/home/HelloThere.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  name: 'home',
  components: {
    Hero,
    HelloThere,
    Footer
  }
}
</script>
