<template>
  <div id="articles">
    <BlogPost v-for="article in articles"
              :key="article.title+article.date"
              :bg="article.imgConfig"
              :tags="article.tags"
              :title="article.title"
              :description="article.description"
              :date="article.date"></BlogPost>
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
      ]
    }
  },
  components: { BlogPost }
}
</script>

<style lang="sass">
  #articles
    padding: 72px 0 36px 0
    max-width: 640px
    margin: 0 auto
</style>
