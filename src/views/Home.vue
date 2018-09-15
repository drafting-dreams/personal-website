<template>
  <div class="home">
    <Hero></Hero>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/home/HelloWorld.vue'
import Hero from '@/components/home/Hero.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hero,
    Footer
  }
}
</script>
