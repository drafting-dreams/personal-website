<template>
  <section id="helloThere">
    <header>
      <img src="../../assets/avatar.jpg">
      <span class="quotationMark openMark">“</span>
      A front-end developer who doesn't keen to be a prob designer is not a good front-end developer.
      <span class="quotationMark closeMark">”</span>
    </header>
    <div>
      <p>
        Hello, there! I'm Shawn Liu, and drafting_dreams is a nick name that I usually use on the net.
      </p>
      <p>
        I'm a senior student in Xiamen University, majoring software engineering. My interest on programming
        is front-end developing. Still looking for a suitable job, if you have one, please contact me.
      </p>
      <p>
        I'm a gamer, traveler, guitar player, tennis beginner and language lover. I'm also eager to learn photography.
      </p>
      <p>
        This site is still in its building period. As you can see, there still aren't any contents in the 'Notes' and
        'Messages' tab. And in the 'Articles' tab, there're some fake post put there for test. I will post some blogs
        or interesting things, most of which should be about front-end tech, on my site later.
      </p>
      <p>
        Since the 'Messages' tab isn't available yet. Please send an e-mail to me (draftingdreams666@gmail.com), if you
        have any issue to discuss.
      </p>
    </div>
  </section>
</template>

<style scoped lang="sass">
  #helloThere
    font-size: 14px
    padding-top: 90px
    text-align: left
    header
      position: relative
      font-size: 3em
      font-weight: bolder
      border-top: 1px solid hsla(240,7%,50%,.25)
      padding: 2em 2em 2.5em 25%
      img
        position: absolute
        margin-right: -1rem
        right: 85%
        top: -16%
        width: 20%
        clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%)
    p
      font-size: 1.5em
      line-height: 2em
      margin-left: 25%
      margin-right: 2em
      max-width: 750px
    .quotationMark
      display: block
      position: absolute
      font-size: 3em
    .openMark
      left: 18%
      top: .2em
    .closeMark
      right: .3em
      bottom: .1em
</style>
