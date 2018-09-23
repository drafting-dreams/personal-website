<template>
  <article>
    <div class="postImg"
         :style="{ paddingBottom: bg.padBtm, backgroundImage: 'url('+bg.url+')', backgroundColor: bg.color ? bg.color : 'black' }"></div>
    <div class="roundWrapper">
      <div class="tags">
        <div class="tag" v-for="tag in tags" :key="tag">
          {{tag}}
        </div>
      </div>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <div class="date">{{date}}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    bg: Object,
    tags: Array,
    title: String,
    description: String,
    date: String
  }
// computed: {
//   imgStyle: function () {
//     this.bg.padB
//   }
// }
}
</script>

<style scoped lang="sass">
  article
    font-size: 14px
    display: flex
    flex-direction: column
    padding: 0 0 1em 0
    margin-top: 3em
    border-bottom: 0
    box-shadow: 0 7px 10px #dadada
    border-radius: 0 0 10px 10px
    .postImg
      background: no-repeat
      padding-bottom: 33.3%
      background-size: 100% 100%
    .roundWrapper
      font-size: inherit
      border-radius: 10px 10px 0 0
      margin-top: -12px
      z-index: 11
      background: white
      text-align: left
      h1
        font-size: 2em
        margin: 0
        padding: 10px
      p
        padding: 0 10px
      .date
        text-align: right
        padding: 0 10px
        color: #aeaeae
      .tags
        padding: 10px
        font-size: inherit
        display: flex
        justify-content: flex-end
        .tag
          margin-left: 10px
          padding: .3rem
          border-radius: 5px
          background: #d1f9d7
</style>
