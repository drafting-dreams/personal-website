<template>
  <div id="articles">
    <BlogPost v-for="article in articles"
              :key="article.title+article.date"
              :bg="article.imgConfig"
              :tags="article.tags"
              :title="article.title"
              :description="article.description"
              :date="article.date"
              :scrollingState="scrollingState"></BlogPost>
  </div>
</template>

<script>
import BlogPost from '@/components/articles/BlogPost.vue'
import pwaImg from '../assets/postImg/pwa.png'
export default {
  name: 'Articles',
  data: function () {
    return {
      articles: [
        {
          imgConfig: { url: pwaImg, padBtm: '56.25%', color: 'orange' },
          tags: ['Vue', 'PWA'],
          title: 'PWA',
          description: 'How to PWA',
          date: 'Sep 23, 2018'
        },
        {
          imgConfig: { url: 'orange' },
          tags: ['Vue', 'PWB'],
          title: 'PWB',
          description: 'How to PWB',
          date: 'Sep 23, 2018'
        },
        {
          imgConfig: { url: '' },
          tags: ['test', 'TEST'],
          title: 'Test',
          description: 'How to Test',
          date: 'Sep 23, 2018'
        }
      ],
      scrollingState: 'still'
    }
  },
  components: { BlogPost },
  mounted: function () {
    const that = this
    let startToScroll = false
    const forceSroll = (function () {
      let timer
      let delay = 300
      return function () {
        let newPos = window.scrollY
        // Already scrolled to the bottom
        if ((window.innerHeight + newPos) >= document.body.offsetHeight) {
          clearTimeout(timer)
          setTimeout(() => {
            that.scrollingState = 'still'
          }, delay)
          return 1
        } else if (newPos === 0) { // Already scrolled to the top
          clearTimeout(timer)
          setTimeout(() => {
            that.scrollingState = 'still'
          }, delay)
          return -1
        }
      }
    })()
    window.onwheel = function () {
      const forceState = forceSroll()
      if (forceState === 1) {
        // Wait to see is this wheel event is a real force scroll
        setTimeout(() => {
          if (that.scrollingState !== 'scrollingUp' && !startToScroll) {
            that.scrollingState = 'scrollingDown'
          }
        }, 50)
        startToScroll = false
      } else if (forceState === -1) {
        setTimeout(() => {
          if (that.scrollingState !== 'scrollDown' && !startToScroll) {
            that.scrollingState = 'scrollingUp'
          }
        }, 50)
        startToScroll = false
      }
    }
    const checkScrollSpeed = (function (settings) {
      settings = settings || {}

      let lastPos
      let newPos
      let timer
      let delta
      let delay = settings.delay || 30 // in "ms" (higher means lower fidelity )

      function clear () {
        lastPos = null
        delta = 0
      }

      clear()

      return function () {
        newPos = window.scrollY
        if (lastPos != null) { // && newPos < maxScroll
          delta = newPos - lastPos
        }
        lastPos = newPos
        clearTimeout(timer)
        timer = setTimeout(clear, delay)
        return delta
      }
    })()

    // listen to "scroll" event
    window.onscroll = function () {
      startToScroll = true
      let scrollingSpeed = checkScrollSpeed()
      if (scrollingSpeed > 30) {
        requestAnimationFrame(() => {
          if (that.scrollingState !== 'scrollingDown') {
            that.scrollingState = 'scrollingDown'
          }
        })
        // that.scrollingState = 'scrollingDown'
      } else if (scrollingSpeed < -30) {
        requestAnimationFrame(() => {
          if (that.scrollingState !== 'scrollingUp') {
            that.scrollingState = 'scrollingUp'
          }
        })
        // that.scrollingState = 'scrollingUp'
      } else {
        setTimeout(() => {
          if (that.scrollingState !== 'still') {
            that.scrollingState = 'still'
          }
        }, 395)
      }
    }
  }
}
</script>

<style lang="sass">
  #articles
    padding: 72px 0 36px 0
    max-width: 640px
    margin: 0 auto
</style>
